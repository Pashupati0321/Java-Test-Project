import java.util.Scanner;

class Swap {
    public static int[] swap(int n1, int n2) {
        // Swap without a temporary variable using arithmetic operations
        n1 = n1 + n2;
        n2 = n1 - n2;
        n1 = n1 - n2;

        return new int[]{n1, n2};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int n1 = sc.nextInt();

        System.out.print("Enter second number: ");
        int n2 = sc.nextInt();

        int[] swappedValues = swap(n1, n2);

        System.out.println("Swapped values: n1 = " + swappedValues[0] + ", n2 = " + swappedValues[1]);

        sc.close();
    }
}
