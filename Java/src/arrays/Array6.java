import java.util.*;

class Array6 {
    // Merge arrays
    static int[] mergeSortArray(int[] ar1, int[] ar2){

        int i=0, j=0, k=0;
        int[] res=new int[ar1.length + ar2.length];

        while(i<ar1.length && j<ar2.length) {
            if (ar1[i] < ar2[j]) {
                res[k] = ar1[i];
                i++;
                k++;
            } else {
                res[k] = ar2[j];
                j++;
                k++;
            }
        }
        while(i<ar1.length){
            res[k] = ar1[i];
            i++;
            k++;
        }
        while(j<ar2.length){
            res[k] = ar2[j];
            j++;
            k++;
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] ar1={3,5,9,12,15};
        int[] ar2={1,6,8};
        int[] res=mergeSortArray(ar1, ar2);

        for(int i=0; i<res.length; i++){
            System.out.print(res[i] + " ");
        }
    }
}
