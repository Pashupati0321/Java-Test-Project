import java.util.*;

class Array5 {
    // Circular array rotation
    static int[] circularArrayRotation(int[] a, int k, int[] q) {
        int[] res = new int[q.length];
        int[] b = new int[a.length];
        for (int i = 0; i < a.length; i++) {
            b[(i + k) % a.length] = a[i];
        }
        for (int i = 0; i < q.length; i++) {
            res[i] = b[q[i]];
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // number of elements in array a
        int k = sc.nextInt(); // number of rotations
        int qCount = sc.nextInt(); // number of queries

        int[] a = new int[n];
        int[] q = new int[qCount];

        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }

        for (int i = 0; i < qCount; i++) {
            q[i] = sc.nextInt();
        }

        int[] result = circularArrayRotation(a, k, q);
        for (int i = 0; i < result.length; i++) {
            System.out.println(result[i]);
        }
    }
}
