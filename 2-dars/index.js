//Homework
//2-Prefix and Postfix

// let a = 1,
//   b = 1;
// let c = ++a; // 2
// let d = b++; // 1

//==========================

// 3-Assinment result
// let a = 2;

// let x = 1 + (a *= 2); // 5

//==========================

//4-Type Conversion

// 1.    ""+1+0  Javob 10
// 10 chiqishishnining sababi. stringdi numberga qo'shsak typeof string
// bo'lib ketadi. Bu yerda bo'sh stringdi 1 ga qo'shdik 1 bo'ldi va typeof
// string va 0 ni qo'shsak 10 bo'lib qoldi

// 2.    ""-1+0  javob -1  number
//ayirish faqt raqamlar bilan ishlaydi va bo'sh stringdi 0ga aylantiradi

// Bu yerda true=1 false=0 va 0+1=1
// 3.    true+false javob 1 number

// Bu yerda  / amali stringni numberga aylantiryabdi va arfimaetik amal
// to'g'ri bajarilyabdi
// 4.    6/"3" javob 2 number

// Bu yerda  * amali stringni numberga aylantiryabdi va arfimaetik amal
// to'g'ri bajarilyabdi
// 5.   "2"*"3"  javob 6 number

// 4+5 qo'shildi va stringdi orqasidan qo'shib qo'yayabmiz
// 7.   4+5+"px"  javob 9px string

// numberlar stringga qo'shilyabdi va ular ham stringga aylanib orqasidan yozilyabdi
// 8.   "$"+4+5   javob $45

//ayirish faqt raqamlar bilan ishlaydi va stringdi numberga aylantirib
// arfimetik amalni to'g'ri bajaryabdi
//9.    "4"-2     javob 2 number

// string numberga qo'shilyabdi va stringga aylandi
// 10.   "-9"+5    javob -95  string

//ayirish faqt raqamlar bilan ishlaydi va stringdi numberga aylantirib
// arfimetik amalni to'g'ri bajaryabdi
//11.    "-9"-5    javob  -14  number

// Matematik amallarda null qiymati 0 ni ifodalaydi
// 12.   null+1    javob  1 number

// Biror bir arfimetik amallarni undefined bilan bajarsa NaN qaytaradi
// 13.   undefined+1  javob NaN

// \t \n bu bo'sh joy qoldiradi va uning qiymati 0ga teng bo'ladi.
// 14.   "\t \n"-2    javob -2 number

// ==================
// 5-Comparisons

// Bu arfimetik amal false qaytaradi chunki 5, 4 dan katta emas
// 1.  5>4

// Bu false qaytaradi chunki bu tenglik ac
// 2.   "apple">"pineapple"
console.log("apple" > "pineapple");

// Bu true qaytaradi chunki ikkalasining ham qiymati yo'q
// 3.  udefined == null

// Bu false qaytaradi chunki 3ta tenglik data type ni tekshiradi
// 4.  udefined === null

// Bu false qaytaradi chunki null mavjud emas "\n0\n" bu esa qiymatga ega
// 5.   null=="\n0\n"

// Bu false qaytaradi chunki bularning data type si string va object
// 6.  null===+"\n0\n"
