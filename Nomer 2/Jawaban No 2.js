<!DOCTYPE html>
<html lang="en">
<head>
    <title>Evaluasi Sprint1</title>
</head>
<body>
    <script>
		alert("Nafizul Izzata Insan Nakaya\nMobile (1)")
        var nilai = prompt("Masukan grade Anda");
        var grade = "";
        
        switch(nilai){
            case "70":
                grade = "(B)";
                break;
            case "71":
                grade = "(B)";
                break;
            case "72":
                grade = "(B)";
                break;
            case "73":
                grade = "(B)";
                break;
            case "74":
                grade = "(B)";
                break;
            case "75":
                grade = "(B)";
                break;
            case "76":
                grade = "(B)";
                break;
            case "77":
                grade = "(B)";
                break;
            case "78":
                grade = "(B)";
                break;
            case "79":
                grade = "(B)";
                break;
            case "80":
                grade = "(B+)";
                break;
            case "81":
                grade = "(B+)";
                break;
            case "82":
                grade = "(B+)";
                break;
            case "83":
                grade = "(B+)";
                break;
            case "84":
                grade = "(B+)";
                break;
            case "85":
                grade = "(B+)";
                break;
            case "86":
                grade = "(B+)";
                break;
            case "87":
                grade = "(B+)";
                break;
            case "88":
                grade = "(B+)";
                break;
            case "89":
                grade = "(B+)";
                break;
            case "90":
                grade = "(A)";
                break;
            case "91":
                grade = "(A)";
                break;
            case "92":
                grade = "(A)";
                break;
            case "93":
                grade = "(A)";
                break;
            case "94":
                grade = "(A)";
                break;
            case "95":
                grade = "(A)";
                break;
            case "96":
                grade = "(A)";
                break;
            case "97":
                grade = "(A)";
                break;
            case "98":
                grade = "(A)";
                break;
            case "99":
                grade = "(A)";
                break;
            case "100":
                grade = "(A)";
                break;
            default:
                document.write("<p>Nilai Kamu Sangat Rendah, Silahkan Coba lagi...</p>");
        }

        if(nilai === ""){
            document.write("</h2>" + "Mohon Maaf Kamu Tidak Mendapatkan Grade" + "</h2>");
        } else {
            document.write("</h2>" + "Grade " + grade + "</h2>");
        }
    </script>
</body>
</html>