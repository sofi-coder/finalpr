var language = "ua";
const languageToggle = document.getElementById("language_toggle");
const homeButton = document.getElementById("home_button");
const workButton = document.getElementById("work_button");
const servicesButton = document.getElementById("services_button");
const contactsButton = document.getElementById("contacts_button");
const aboutSalon = document.getElementById("about_salon");
const ourWork = document.getElementById("our_work");
const ourServices = document.getElementById("our_services");
const individialHaircut = document.getElementById("individual_haircut");
const kidsHaircut = document.getElementById("kids_haircut");
const nails = document.getElementById("nails");
const eyelashes = document.getElementById("eyelashes");
const social = document.getElementById("social_media");








var uaTexts = { 
    home: "Головна",
    work: "Наші роботи ",
    services: "Послуги",
    contacts: "Контакти",
    aboutSalon: "Салон краси Evi у Львові пропонує повний спектр процедур догляду та працює виключно з професійною косметикою. Бути красивою та доглянутою - це мрія кожної жінки. Наші спеціалісти докладуть усіх зусиль, щоб здивувати вас. Ми також єдиний салон на вулиці Володимира Великого, де персонал розмовляє англійською. Ми знаємо секрет, як підкреслити вашу природну привабливість і уповільнити плин часу. У нашому салоні краси завжди по-домашньому затишна і доброзичлива атмосфера, увага і турбота про кожного клієнта. Це те місце, куди вам захочеться повернутися знову і знову. ",
    ourWork: "Наші роботи",
    ourServices: "Наші послуги:",
    individialHaircut: "Індивідуальні жіночі та чоловічі стрижки",
    kidsHaircut: "Дитячі стрижки",
    nails: "Послуги майстра манікюру",
    eyelashes: "Нарощення вій",
    social: "Ви можете знайти нас в соціальних мережах"
    
};

var enTexts = { 
    home: "Home",
    work: "Our Work",
    services: "Services",
    contacts: "Contacts",
    aboutSalon: "Beauty Salon Evi in Lviv offers a full range of care procedures and works exclusively with professional cosmetics. To be beauttul and well- groomed is every woman's dream Our specialsts will make every effort to surprise you with the result. We are also the only salon on Volodymyra Velykogo street where staff speak English. Also we have friendly atmpthphere and pesonal approrach to each client.",
    ourWork: "Our Work",
    ourServices: "Our Services:",
    individialHaircut: "Individial women and man haircuts",
    kidsHaircut: "Kids Haircut",
    nails: "Nails master services",
    eyelashes: "Eyelash extension",
    social: "Follow us in social media"
};





function switchLanguage() {
    console.log(languageToggle);
  if (language === "ua") {
      console.log(language);
      languageToggle.innerHTML = "Ukrainian";
      homeButton.innerHTML = enTexts.home;
      workButton.innerHTML = enTexts.work;
      servicesButton.innerHTML = enTexts.services;
      contactsButton.innerHTML = enTexts.contacts;
      aboutSalon.innerHTML = enTexts.aboutSalon;
      ourWork.innerHTML = enTexts.ourWork;
      ourServices.innerHTML = enTexts.ourServices;
      individialHaircut.innerHTML = enTexts.individialHaircut;
      kidsHaircut.innerHTML = enTexts.kidsHaircut;
      nails.innerHTML = enTexts.nails;
      eyelashes.innerHTML = enTexts.eyelashes;
      social.innerHTML = enTexts.social;
          language = "en";


 } else {
      console.log(language);
    
    languageToggle.innerHTML = "English";
      homeButton.innerHTML = uaTexts.home;
      workButton.innerHTML = uaTexts.work;
      servicesButton.innerHTML = uaTexts.services;
      contactsButton.innerHTML = uaTexts.contacts;
      aboutSalon.innerHTML = uaTexts.aboutSalon;
      ourWork.innerHTML = uaTexts.ourWork;
      ourServices.innerHTML = uaTexts.ourServices;
      individialHaircut.innerHTML = uaTexts.individialHaircut;
      kidsHaircut.innerHTML = uaTexts.kidsHaircut;
      nails.innerHTML = uaTexts.nails;
      eyelashes.innerHTML = uaTexts.eyelashes;
      social.innerHTML = uaTexts.social;
     language = "ua";

 }
 
 


}