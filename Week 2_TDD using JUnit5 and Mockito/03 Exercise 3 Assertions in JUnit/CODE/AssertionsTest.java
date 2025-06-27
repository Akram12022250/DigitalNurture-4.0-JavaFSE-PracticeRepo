package com.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert that 2 + 3 equals 5
        assertEquals(5, 2 + 3);

        // Assert that 5 is greater than 3 (true)
        assertTrue(5 > 3);

        // Assert that 5 is not less than 3 (false)
        assertFalse(5 < 3);

        // Assert that this is null
        assertNull(null);

        // Assert that this is NOT null
        assertNotNull(new Object());
    }
}
