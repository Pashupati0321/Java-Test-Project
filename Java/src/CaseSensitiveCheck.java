public class CaseSensitiveCheck{
     int x = 6;

     public int fun(){
         x = 10;
         return x;
     }
    public static void main(String[] args) {
        CaseSensitiveCheck obj = new CaseSensitiveCheck();
        System.out.println(obj.fun());
    }
}