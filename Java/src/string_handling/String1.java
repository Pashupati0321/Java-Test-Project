class String1 {

    public static void main(String[] args) {
    String s1="JAVA";
    String s2=new String("JAVA");
    String s3= new String("JS");
    String s4=s3;

    System.out.println(s1.equals(s2));
    System.out.println(s1.equals(s3));
    System.out.println(s1 == s3);
    System.out.println(s3.equals(s4));
    System.out.println(s3 == s4);

    if(s1==s2){
        System.out.println("Refereneces are equal");
    }
    else{
        System.out.println("References are unequal");
    }
    }
}
