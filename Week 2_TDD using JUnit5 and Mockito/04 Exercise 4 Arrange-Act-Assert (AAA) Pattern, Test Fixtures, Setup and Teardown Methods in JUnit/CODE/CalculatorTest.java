package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // 🔧 Setup - runs BEFORE each test
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    // 🧹 Teardown - runs AFTER each test
    @After
    public void tearDown() {
        System.out.println("Teardown complete");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 2, b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 7, b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(3, result);
    }
}