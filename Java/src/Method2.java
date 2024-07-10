class Method2
{
    //i/p and no o/p method
    int c;
    void add(int a, int b){
        c=a+b;
        System.out.println(c);
    }
    public static void main(String[] args){

        Method2 m2=new Method2();
        int n1=10;
        int n2=20;
        m2.add(n1, n2);

    }
}