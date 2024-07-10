class Pattern17
{
    public static void main(String[] args){

        for(int i=1; i<=5; i++)
        {
            int count = i;
            for(int j=1; j<=(5-i)+1; j++)
            {
                System.out.print(count++ + " ");
            }
            System.out.println();
        }
    }
}