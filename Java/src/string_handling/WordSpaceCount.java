import java.util.Scanner;
class WordSpaceCount {
    //To count word, character and space

    //count spaces
    static int countSpace(String s) {
        int countSpace=0;
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i) == ' '){
                countSpace++;
            }
        }
        return countSpace;
    }
    //count characters
    static int countCharacter(String s) {
        int countCharacter = 0;
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i) != ' '){
                countCharacter++;
            }
        }
        return countCharacter;
    }

    //count words
    static int countWord(String s) {
        int countWord = 0;
        boolean inWord = false;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ' ') {
                inWord = false;
            } else if (!inWord) {
                countWord++;
                inWord = true;
            }
        }
        return countWord;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();

        System.out.println("Count spaces : "+countSpace(s));
        System.out.println("Count characters : "+countCharacter(s));
        System.out.println("Count words : "+countWord(s));

    }
}

