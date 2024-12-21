import React from "react";
import { Redirect } from "expo-router";
import useAuthStore from "./stores/authStore";

const IndexPage = () => {
    const { authenticated } = useAuthStore();

    return authenticated ? (
        <Redirect href="/HomePage" />
    ) : (
        <Redirect href="/LoginPage" />
    );
};

export default IndexPage;
