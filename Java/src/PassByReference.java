class PassByReference {
    String name = "BMW";
    int cost = 500000;
    PassByReference y; // Define y as an instance variable

    void runCar(PassByReference x) {
        y = x;
    }

        public static void main(String[] args) {
            PassByReference pf = new PassByReference();
            System.out.println(pf.name);
            System.out.println(pf.cost);
            pf.runCar(pf);

            pf.y.name = "Maruti"; // Access y through pf
            pf.y.cost = 200000;   // Access y through pf

            System.out.println(pf.name);
            System.out.println(pf.cost);
        }

}
