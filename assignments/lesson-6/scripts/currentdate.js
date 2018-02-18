function time
SimpleDateFormat sdf = new SimpleDateFormat("DD/MM/yyyy");
Date date = new Date();
String date3= sdf.format(date);
date = sdf.parse(date3);
