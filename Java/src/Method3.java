class Method3
{
    //no i/p and o/p method
    int a=10;
    int b=20;
    int add(){
        int c=a+b;
        return c;
    }
    public static void main(String[] args){

        Method3 m3=new Method3();
        int res = m3.add();
        System.out.println(res);

    }
}