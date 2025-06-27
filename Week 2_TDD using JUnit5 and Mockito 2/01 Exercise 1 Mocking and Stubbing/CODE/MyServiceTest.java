package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Arrange: Create mock of ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub: define what the mock should return
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act: Use mock in MyService
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert: Check result
        assertEquals("Mock Data", result);
    }
}