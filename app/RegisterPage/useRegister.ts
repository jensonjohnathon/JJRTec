import { useState } from "react";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";

export const useRegister = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [serverName, setServerName] = useState("");

    const router = useRouter();
    const { setRegistered, setLoading, setZustandServerName } = useAuthStore();

    const handleRegister = async () => {
        setZustandServerName(serverName);
        const registerRoute = "/account_register";

        try {
            const response = await fetch(serverName + registerRoute, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                setRegistered(true);
                router.push("/LoginPage"); // Redirect to login
            } else {
                // Non-successful status, handle error
                const errorData = await response.json();
                alert(
                    `Error: ${
                        errorData.message ||
                        "Registration failed. Please try again."
                    }`
                );
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Unable to register. Check your connection or try again.");
        } finally {
            setLoading(false);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        serverName,
        setServerName,
        handleRegister,
    };
};

export default useRegister;
