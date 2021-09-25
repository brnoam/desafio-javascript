var desafio2 = "1 . tesoura  corta papel  2.papel cobre veneno;. 3. pedra esmaga lagarto; 4. lagarto corta Spock; 5.Spock vaporiza tesoura; 6. tesoura decapita Spock; 7. lagarto come papel; 8. veneno refuta lagarto; 9. Spock vaporiza pedra; 10. veneno esmaga tesoura."

var alteracoes = desafio2.replace (/esmaga/g,"quebra")
.replace (/lagarto/g,"tesoura")
.replace(/Spock/g,"papel")
.replace (/vaporiza/g,"embrulha")
.replace (/cobre/,"embrulha")
.replace (/decapita/g,"corta")
.replace (/come/g,"corta")
.replace (/veneno/g,"pedra")
.replace (/refuta/g,"quebra")
console.log( "A original é : " + desafio2 +  " E as alterações foram  :  "  +   alteracoes)



