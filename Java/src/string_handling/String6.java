class String6 {
    //occurence of character in string
    static int repeatCharCount(String s, String c) {
        int count = 0;
        char key=c.charAt(0);
        for (int i = 0; i < s.length(); i++)
        {
            if (s.charAt(i) == key)
            {
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        String s = "How are you";
        String c="o";
        System.out.println(repeatCharCount(s, c));
    }
}

