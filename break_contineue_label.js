//break
for (i = 0; i < 10; i++) {
    if (i == 5) {
      break;
    }
    console.log(i);
  }

//break_label  
bre_1:
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 10; j++) {
      xx = i * 10 + j;
      if (xx > 20) {
        break bre_1;
      }
      console.log(xx + "<br>");
    }
  }
bre_2:
  for(i=0; i<=20; i++){
      if(i<21){
          console.log(i+"<br>")
      }else{
          break bre_2;
      }
  }

//continue  
  for (i = 0; i < 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }  

con_1:
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      xx = i * 10 + j;
      if (xx == 55) {
        continue con_1;
      }
      console.log(xx)
    }
  }  

//label
label1:
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      if (func(i, j)) {
        break label1;
      }
    }
  }  