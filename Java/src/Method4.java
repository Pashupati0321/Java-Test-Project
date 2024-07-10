class Method4
{
    //i/p and o/p method
    int c;
    int add(int a, int b){
        c=a+b;
        return c;
    }
    public static void main(String[] args){

        Method4 m4=new Method4();
        int n1=10;
        int n2=20;
        int res = m4.add(n1, n2);
        System.out.println(res);

    }
}