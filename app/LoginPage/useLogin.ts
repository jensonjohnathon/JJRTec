import { useState } from "react";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";

export const useLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { setAuthenticated } = useAuthStore();

    const handleLogin = () => {
        if (username === "admin" && password === "password") {
            setAuthenticated(true);
            router.push("/HomePage");
        } else {
            alert("Invalid credentials");
        }
    };

    return { username, setUsername, password, setPassword, handleLogin };
};

export default useLogin;
