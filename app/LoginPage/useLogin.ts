import { useState } from "react";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";

export const useLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { setAuthenticated, setLoading, setTokens } = useAuthStore();

    const handleLogin = async () => {
        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                console.error("Login failed:", errorData);
                alert("Invalid credentials");
                return;
            }

            const data = await response.json();
            // Expecting { "access_token": "...", "refresh_token": "..." }

            if (data.access_token && data.refresh_token) {
                setTokens(data.access_token, data.refresh_token);
                setAuthenticated(true);
                router.push("/HomePage");
            } else {
                alert("Invalid response from server");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Unable to login. Check your connection or try again.");
        } finally {
            setLoading(false);
        }
    };
    const routeToRegisterPage = async () => {
        router.push("/RegisterPage");
    };
    return {
        username,
        setUsername,
        password,
        setPassword,
        handleLogin,
        routeToRegisterPage,
    };
};

export default useLogin;
