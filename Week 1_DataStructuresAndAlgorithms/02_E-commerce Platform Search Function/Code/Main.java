public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(104, "Shoes", "Fashion"),
                new Product(101, "Laptop", "Electronics"),
                new Product(103, "Book", "Education"),
                new Product(102, "Phone", "Electronics")
        };

        int searchId = 103;

        System.out.println(" Searching for Product ID: " + searchId + " using Linear Search...");
        Product result1 = LinearSearch.search(products, searchId);
        printProductDetails(result1);

        System.out.println("\n Sorting and searching using Binary Search...");
        BinarySearch.sortProducts(products);
        Product result2 = BinarySearch.search(products, searchId);
        printProductDetails(result2);
    }

    // Helper method to print product details
    public static void printProductDetails(Product product) {
        if (product != null) {
            System.out.println(" Product Found:");
            System.out.println("   ID       : " + product.productId);
            System.out.println("   Name     : " + product.productName);
            System.out.println("   Category : " + product.category);
        } else {
            System.out.println(" Product not found.");
        }
    }
}
