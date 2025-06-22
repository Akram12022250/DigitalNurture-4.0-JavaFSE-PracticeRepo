import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
    public static void sortProducts(Product[] products) {
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
    }

    public static Product search(Product[] products, int id) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == id)
                return products[mid];
            else if (products[mid].productId < id)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }
}
