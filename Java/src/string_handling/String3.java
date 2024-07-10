class String3 {

    public static void main(String[] args) {
        String s1="Java";
        String s2="JAVA";
        String s3=new String("JAVA");

        //String s4="JAVA" + "PYTHON";
        //String s5="JAVA" + "PYTHON";

        System.out.println(s1.equals(s2));
        System.out.println(s1 == s2);
        System.out.println(s1.equalsIgnoreCase(s2));
        System.out.println(s2.equalsIgnoreCase(s3));
        System.out.println(s1.equalsIgnoreCase(s3));
        System.out.println(s2 == s3);
    }
}
