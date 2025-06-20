public class TestSingleton {
    public static void main(String[] args) {
        // Get the logger instance for the first time
        Logger logger1 = Logger.getInstance();
        logger1.log("First log message");

        // Get the logger instance again
        Logger logger2 = Logger.getInstance();
        logger2.log("Second log message");

        // Check if both logger instances are the same
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same.");
        } else {
            System.out.println("Logger instances are different.");
        }
    }
}
