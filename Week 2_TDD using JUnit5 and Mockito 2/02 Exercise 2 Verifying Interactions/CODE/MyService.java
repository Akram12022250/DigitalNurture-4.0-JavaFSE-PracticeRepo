package com.example;

public class MyService {
    private final ExternalApi api; // ✅ added final

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}