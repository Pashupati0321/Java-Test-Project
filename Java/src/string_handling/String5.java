class String5 {

    public static void main(String[] args) {
        //compareTo() --> character by character comparison ==> if s1=s2 => 0, s1>s2 => +ve, s1<s2 => -ve

        String s1="SACHIN";
        String s2="SAURAV";
        String s3="SACHIN"; // S A C H I N
         //                    ^ ^ ^ ^ ^ ^
        //                     | | | | | |   compare ASCII of s3 to s4
        String s4="SacHIN"; // S a c H I N
        String s5="SACHIN T";

        System.out.println(s1.compareTo(s2)); // -18
        System.out.println(s2.compareTo(s3)); // 18
        System.out.println(s1.compareTo(s3)); // 0
        System.out.println(s3.compareTo(s4)); // -32
        System.out.println(s3.compareTo(s5)); // -2
    }
}
