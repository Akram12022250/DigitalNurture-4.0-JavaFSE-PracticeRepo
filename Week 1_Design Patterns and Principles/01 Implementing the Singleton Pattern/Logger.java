public class Logger {
    // Step 1: Create a private static instance of the class
    private static Logger instance;

    // Step 2: Make the constructor private so no other class can instantiate it
    private Logger() {
        System.out.println("Logger instance created!");
    }

    // Step 3: Provide a public static method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();  // create new instance if not created yet
        }
        return instance;
    }

    // Step 4: Create a simple log method
    public void log(String message) {
        System.out.println("Log Message: " + message);
    }
}
