class Pattern7
{
    public static void main(String[] args){
        int count;
        for(int i=0; i<5; i++)
        {
            count=i+1;
            for(int j=0; j<5; j++)
            {
                System.out.print(count++ +" ");
            }
            System.out.println();
        }
    }
}