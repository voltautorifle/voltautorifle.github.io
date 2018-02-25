function time
SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
Date date = new Date();
String date3= sdf.format(date);
date = sdf.parse(date3);