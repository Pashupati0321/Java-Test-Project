class PassByValue
{
    String name="BMW";
    int cost=500000;


    public static void main(String[] args){

        PassByValue pv=new PassByValue();
        System.out.println(pv.name);
        System.out.println(pv.cost);

        pv.name="Maruti";
        pv.cost=200000;

        System.out.println(pv.name);
        System.out.println(pv.cost);
    }
}