import java.util.StringTokenizer;

class StringTokenizer1 {

    public static void main(String[] args) {
        String s = "JAVA PYTHON SQL AI";
        StringTokenizer st = new StringTokenizer(s); //after space it will convert into token

        //        StringTokenizer st = new StringTokenizer(s, "A");

        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
    }
}
