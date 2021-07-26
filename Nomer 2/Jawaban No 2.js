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
		case nilai > 90:
		    grade = 'A';
			break;
		case nilai > 80:
		    grade = 'B+';
			break;
		case nilai > 70:
		    grade = 'B';
			break;
            default:
                document.write(grade);
        }
    </script>
</body>
</html>
