/**
 * This is your cocktail database. 
 * To add a new cocktail, simply add a new object to the 'recipes' array below.
 */
export const recipes = {
  en: [
    {
      id: 1,
      name: "Penicillin",
      description: "Whiskey, lemon juice, honey syrup and fresh ginger",
      ingredients: [
        "6cl Whiskey",
        "2.5cl Lemon Juice",
        "2.5cl Honey Syrup (2 parts honey, 1 part water)",
        "3 slices Fresh Ginger"
      ],
      instructions: [
        "Muddle ginger in the glass",
        "Add whiskey and lemon juice",
        "(Optional) Smoke the glass with oak chips",
        "Shake with plenty of ice and strain into an ice-filled glass"
      ],
      category: "Cocktail"
    },
    {
      id: 2,
      name: "Blood Jellyfish",
      description: "Campari, triple sec, gin and Bailey's",
      ingredients: [
        "1.5cl Campari",
        "2.5cl triple sec",
        "0.5cl Gin",
        "1 drop Bailey's"
      ],
      instructions: [
        "Pour Campari, triple sec, and gin into a shot glass.",
        "Add a drop of Bailey's"
      ],
      category: "Shot"
    },
    {
      id: 3,
      name: "Caipirinha",
      description: "Rum, sugar and lime",
      ingredients: [
        "6cl Rum",
        "2 tsp Sugar",
        "Half a Lemon"
      ],
      instructions: [
        "Cut half a lemon into 4 wedges and put in shaker.",
        "Add sugar and muddle in the shaker",
        "Add ice and rum, then shake",
        "Pour into glass without straining"
      ],
      category: "Cocktail"
    },
    {
      id: 4,
      name: "Martini",
      description: "Dry, Wet, Dirty, Reverse, Vodka variations.",
      ingredients: [
        "Dry: 7.5cl Gin, 1.5cl Dry Vermouth, Lemon peel",
        "Wet: 6cl Gin, 3cl Dry Vermouth, Lemon peel",
        "Dirty: 7.5cl Vodka, 1.5cl Dry Vermouth, Green olive",
        "Reverse: 6cl Dry Vermouth, 3cl Gin, Lemon peel or olive",
        "Vodka: 7.5cl Vodka, 1.5cl Dry Vermouth, Lemon peel or olive"
      ],
      instructions: [
        "Add ingredients to a mixing glass",
        "Stir with plenty of ice",
        "Strain into a chilled glass",
        "Garnish with lemon peel"
      ],
      category: "Cocktail"
    },
    {
      id: 5,
      name: "Cucumber Gin Basil Smash",
      description: "Gin, lemon juice, cucumber and basil",
      ingredients: [
        "4cl Gin",
        "2cl Lemon Juice",
        "8 slices Cucumber",
        "12 Basil leaves",
        "1 Sugar cube"
      ],
      instructions: [
        "Muddle all ingredients in a shaker.",
        "Add ice and shake.",
        "Strain into an ice-filled glass"
      ],
      category: "Cocktail"
    },
    {
      id: 6,
      name: "Jagerbomb Long Island Iced Tea",
      description: "Vodka, gin, rum, tequila, Jägermeister, Redbull",
      ingredients: [
        "1.5cl Vodka",
        "1.5cl Gin",
        "1.5cl Rum",
        "1.5cl Tequila",
        "1.5cl Jägermeister",
        "1.5cl Sugar Syrup",
        "1.5cl Lemon Juice",
        "Top with Redbull"
      ],
      instructions: [
        "Add all ingredients to an ice-filled glass and stir gently"
      ],
      category: "Cocktail"
    },
    {
      id: 7,
      name: "Tequila Slammer",
      description: "Tequila and Sprite",
      ingredients: [
        "3cl Tequila",
        "3cl Sprite"
      ],
      instructions: [
        "Pour tequila and sprite into a large shot glass, cover with a napkin",
        "Slam the glass on the table"
      ],
      category: "Shot"
    },
    {
      id: 8,
      name: "Picador",
      description: "Tequila, triple sec and lemon juice",
      ingredients: [
        "4.5cl Tequila",
        "2.5cl Triple Sec",
        "2.5cl Lemon Juice"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into a chilled salt-rimmed glass"
      ],
      category: "Cocktail"
    },
    {
      id: 9,
      name: "Tequila Matador",
      description: "Tequila, pineapple juice and lemon juice",
      ingredients: [
        "6cl Tequila",
        "6cl Pineapple Juice",
        "2cl Lemon Juice"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into a chilled glass"
      ],
      category: "Cocktail"
    },
    {
      id: 10,
      name: "Jager Sandwich",
      description: "Bailey's, milk and Jägermeister",
      ingredients: [
        "Bailey's",
        "Milk",
        "Jägermeister"
      ],
      instructions: [
        "Fill 2/4 shot glass with Bailey's, carefully layer 1/4 milk with a spoon",
        "Carefully layer 1/4 Jägermeister on top with a spoon"
      ],
      category: "Shot"
    },
    {
      id: 11,
      name: "Coronarita",
      description: "Corona, tequila, triple sec and sugar syrup",
      ingredients: [
        "1 bottle Corona",
        "3cl Tequila",
        "1.5cl Triple Sec",
        "1.5cl Sugar Syrup",
        "3cl Lemon Juice"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into a large ice-filled salt-rimmed glass",
        "Invert the Corona bottle into the glass"
      ],
      category: "Cocktail"
    },
    {
      id: 12,
      name: "Hibiscus Gin & Tonic",
      description: "Gin, lemon juice, hibiscus tea and tonic",
      ingredients: [
        "6cl Gin",
        "3cl Lemon Juice",
        "6cl Hibiscus Tea",
        "12cl Tonic"
      ],
      instructions: [
        "Add ingredients to an ice-filled glass and stir"
      ],
      category: "Cocktail"
    },
    {
      id: 13,
      name: "Charro Negro",
      description: "Tequila, lemon juice and cola",
      ingredients: [
        "6cl Tequila",
        "1.5cl Lemon juice",
        "Top with Cola"
      ],
      instructions: [
        "Add ingredients to an ice-filled glass and top with cola"
      ],
      category: "Cocktail"
    },
    {
      id: 14,
      name: "Enzoni",
      description: "Gin, Campari, lemon juice, sugar syrup and grapes",
      ingredients: [
        "3cl Gin",
        "3cl Campari",
        "2cl Lemon Juice",
        "5 Grapes",
        "1.5cl Sugar Syrup"
      ],
      instructions: [
        "Muddle 5 grapes with sugar syrup in shaker",
        "Add remaining ingredients and ice, shake well",
        "Strain into an ice-filled glass"
      ],
      category: "Cocktail"
    },
    {
      id: 15,
      name: "Gold Rush",
      description: "Whiskey, lemon juice and honey syrup",
      ingredients: [
        "6cl Whiskey",
        "3cl Lemon Juice",
        "2cl Honey Syrup"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into an ice-filled glass",
        "Garnish with lemon peel"
      ],
      category: "Cocktail"
    },
    {
      id: 16,
      name: "Devil's Margarita",
      description: "Tequila, lemon juice, sugar syrup, triple sec and red wine",
      ingredients: [
        "4.5cl Tequila",
        "3cl Lemon Juice",
        "0.75cl Sugar Syrup",
        "2.25cl Triple Sec",
        "2 dashes Liquid Salt",
        "Top with Red Wine"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into an ice-filled glass",
        "Carefully float red wine on top using a spoon"
      ],
      category: "Cocktail"
    },
    {
      id: 17,
      name: "Classic Daiquiri",
      description: "Rum, lemon juice and sugar syrup",
      ingredients: [
        "6cl Rum",
        "3cl Lemon Juice",
        "2cl Sugar Syrup"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into a chilled glass"
      ],
      category: "Cocktail"
    },
    {
      id: 18,
      name: "Jagerita",
      description: "Jägermeister, Triple Sec and lemon juice",
      ingredients: [
        "4.5cl Jägermeister",
        "2.25cl Triple Sec",
        "3cl Lemon Juice",
        "0.75cl Sugar Syrup"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into an ice-filled glass"
      ],
      category: "Cocktail"
    },
    {
      id: 19,
      name: "Adios, Motherfucker",
      description: "Vodka, rum, tequila, gin, blue curaçao, Sprite",
      ingredients: [
        "1.5cl Vodka",
        "1.5cl Rum",
        "1.5cl Tequila",
        "1.5cl Gin",
        "1.5cl Blue Curaçao",
        "3cl Lemon Juice",
        "3cl Sugar Syrup",
        "Top with Sprite"
      ],
      instructions: [
        "Add ingredients to an ice-filled glass and stir",
        "Top with Sprite"
      ],
      category: "Cocktail"
    },
    {
      id: 20,
      name: "Long Island Iced Tea",
      description: "Vodka, rum, gin, tequila, triple sec, Cola",
      ingredients: [
        "2.25cl Vodka",
        "2.25cl Rum",
        "2.25cl Gin",
        "2.25cl Tequila",
        "2.25cl Triple Sec",
        "2.25cl Lemon Juice",
        "2.25cl Sugar Syrup",
        "Top with Cola"
      ],
      instructions: [
        "Add ingredients to an ice-filled glass and stir",
        "Top with Cola"
      ],
      category: "Cocktail"
    },
    {
      id: 21,
      name: "Tequila Sunrise",
      description: "Tequila, orange juice and grenadine",
      ingredients: [
        "6cl Tequila",
        "12cl Orange Juice",
        "0.75cl Grenadine"
      ],
      instructions: [
        "Add ingredients to an ice-filled glass and serve"
      ],
      category: "Cocktail"
    },
    {
      id: 22,
      name: "Cum In A Hot Tub",
      description: "Vodka, rum and Bailey's",
      ingredients: [
        "2/4 Vodka",
        "1/4 Rum",
        "3-5 drops Bailey's"
      ],
      instructions: [
        "Add ingredients to a shot glass and serve"
      ],
      category: "Shot"
    },
    {
      id: 23,
      name: "Mojito",
      description: "Rum, lemon juice, sugar syrup, mint, Sprite",
      ingredients: [
        "6cl Rum",
        "2.25cl Lemon Juice",
        "1.5cl Sugar Syrup",
        "3 Fresh Mint Leaves",
        "Top with Sprite"
      ],
      instructions: [
        "Muddle mint with syrup in shaker",
        "Add remaining ingredients and ice, shake well",
        "Strain into a glass filled with crushed ice",
        "Top with Sprite"
      ],
      category: "Cocktail"
    },
    {
      id: 24,
      name: "Golden Glove",
      description: "Rum, triple sec, lemon juice and sugar syrup",
      ingredients: [
        "6cl Rum",
        "1 tsp Triple Sec",
        "1.5cl Lemon Juice",
        "1 tsp Sugar"
      ],
      instructions: [
        "Add all ingredients to shaker and shake well with ice",
        "Strain into a glass filled with crushed ice"
      ],
      category: "Cocktail"
    },
    {
      id: 25,
      name: "Shirley Temple",
      description: "Grenadine, lemon juice and ginger ale",
      ingredients: [
        "1.5cl Grenadine",
        "0.75cl Lemon Juice",
        "15cl Ginger Ale"
      ],
      instructions: [
        "Add all ingredients to an ice-filled glass and stir gently"
      ],
      category: "Mocktail"
    },
    {
      id: 26,
      name: "Mint-Basil Limeade",
      description: "Basil, mint, sugar syrup, lemon juice and Sprite",
      ingredients: [
        "4 leaves Basil",
        "4 leaves Mint",
        "3cl Sugar Syrup",
        "3cl Lemon Juice",
        "Top with Sprite"
      ],
      instructions: [
        "Muddle mint and basil with syrup in shaker",
        "Add remaining ingredients and ice, shake well",
        "Strain into an ice-filled glass",
        "Top with Sprite"
      ],
      category: "Mocktail"
    },
    {
      id: 27,
      name: "Moscow Mule",
      description: "Vodka, lemon juice and ginger ale",
      ingredients: [
        "6cl Vodka",
        "1.5cl Lemon Juice",
        "Top with Ginger Ale"
      ],
      instructions: [
        "Add ingredients to an ice-filled glass",
        "Top with Ginger Ale"
      ],
      category: "Cocktail"
    },
    {
      id: 28,
      name: "Negroni",
      description: "Gin, Campari, sweet vermouth",
      ingredients: [
        "3cl Gin",
        "3cl Campari",
        "3cl Sweet Vermouth",
        "Orange peel"
      ],
      instructions: [
        "Add ingredients to a mixing glass with ice and stir",
        "Strain into an ice-filled glass and garnish with orange peel"
      ],
      category: "Cocktail"
    },
    {
      id: 29,
      name: "Dirty Shirley",
      description: "Vodka, grenadine and Sprite",
      ingredients: [
        "6cl Vodka",
        "3cl Grenadine",
        "Top with Sprite"
      ],
      instructions: [
        "Add ingredients to an ice-filled glass and top with Sprite",
        "Stir gently and serve"
      ],
      category: "Cocktail"
    },
    {
      id: 30,
      name: "Kamikaze",
      description: "Vodka, triple sec and lemon juice",
      ingredients: [
        "6cl Vodka",
        "2.25cl Triple Sec",
        "2.25cl Lemon Juice"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into 2 large shot glasses"
      ],
      category: "Shot"
    },
    {
      id: 31,
      name: "Blue Hawaii",
      description: "Vodka, rum, blue curaçao, pineapple juice, lemon juice and sugar syrup",
      ingredients: [
        "2.25cl Vodka",
        "2.25cl Rum",
        "1.5cl Blue Curaçao",
        "9cl Pineapple Juice",
        "1.5cl Lemon Juice",
        "1.5cl Sugar Syrup"
      ],
      instructions: [
        "Add ingredients to shaker and shake well with ice",
        "Strain into a glass filled with crushed ice"
      ],
      category: "Cocktail"
    },
    {
      id: 32,
      name: "Lemon Drop",
      description: "Vodka, triple sec, lemon juice and sugar syrup",
      ingredients: [
        "6cl Vodka",
        "1.5cl Triple Sec",
        "3cl Lemon Juice",
        "3cl Sugar Syrup"
      ],
      instructions: [
        "Rim the glass with sugar",
        "Add ingredients to shaker and shake well with ice",
        "Strain into the prepared glass"
      ],
      category: "Cocktail"
    },
    {
      id: 33,
      name: "Margarita",
      description: "Tequila, triple sec, lemon juice and sugar syrup",
      ingredients: [
        "6cl Tequila",
        "1.5cl Triple Sec",
        "3cl Lemon Juice",
        "1.5cl Sugar Syrup"
      ],
      instructions: [
        "Rim the glass with salt",
        "Add ingredients to shaker and shake well with ice",
        "Strain into the prepared glass"
      ],
      category: "Cocktail"
    }
  ],
  tr: [
    {
      id: 1,
      name: "Penicillin",
      description: "Viski, limon suyu, bal şurubu ve taze zencefil",
      ingredients: [
        "6cl viski",
        "2.5cl limon suyu",
        "2,5cl bal şurubu(2ölçü bal, 1ölçü su)",
        "3 dilim taze zencefil",
      ],
      instructions: [
        "Zencefilleri bardakta ezin",
        "Viski ve limon suyu ekleyin",
        "(Opsiyonel) Bardağı meşe cipsi ile isleyin",
        "Bol buz ile çalkalayıp buzlu bardağa süzün"
      ],
      category: "Cocktail"
    },
    {
      id: 2,
      name: "Blood Jellyfish",
      description: "Campari, triple sec, cin ve Bailey's",
      ingredients: [
        "1.5cl Campari",
        "2.5cl triple sec",
        "0.5cl cin",
        "1 damla Bailey's"
      ],
      instructions: [
        "Campari, triple sec, cini bir shot bardağına koyun.",
        "Bir damla Bailey's ekleyin",
      ],
      category: "Shot"
    },
    {
      id: 3,
      name: "Caipirinha",
      description: "Rom, şeker ve limon",
      ingredients: [
        "6cl rom",
        "2 çay kaşığı şeker",
        "Yarım limon"
      ],
      instructions: [
        "Yarım limonu 4 parçaya ayırın ve shakerın içine koyun.",
        "Shakerın içine şeker ekleyip ezin",
        "Buz ve romu ekleyip çalkalayın",
        "Süzmeden bardağa dökün"
      ],
      category: "Cocktail"
    },
    {
      id: 4,
      name: "Martini",
      description: "Dry, Wet, Dirty, Reverse, Vodka varyasyonları.",
      ingredients: [
        "Dry: 7.5cl cin, 1.5cl dry vermut, limon kabuğu",
        "Wet: 6cl cin, 3cl dry vermut, limon kabuğu",
        "Dirty: 7.5cl vodka, 1,5cl dry vermut, yeşil zeytin",
        "Reverse: 6cl dry vermut, 3cl cin, limon kabuğu veya zeytin",
        "Vodka: 7.5cl vodka, 1,5cl dry vermut, limon kabuğu veya zeytin",
      ],
      instructions: [
        "Malzemeleri karıştırma bardağına koyun",
        "Bol buz ile karıştırın",
        "Soğuk bardağa süzün",
        "Limon kabuğuyla süsleyin"
      ],
      category: "Cocktail"
    },
    {
      id: 5,
      name: "Cucumber Gin Basil Smash",
      description: "Cin, limon suyu, salatalık ve feslegen",
      ingredients: [
        "4cl cin",
        "2cl limon suyu",
        "8 dilim salatalık",
        "12 yaprak fesleğen",
        "1 küp şeker"
      ],
      instructions: [
        "Tüm malzemeleri shaker'a koyup ezin.",
        "Buz ekleyip çalkalayın.",
        "Buzlu bardağa süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 6,
      name: "Jagerbomb Long Island Iced Tea",
      description: "Vodka, cin, rom, tekila, jagermeister, redbull",
      ingredients: [
        "1.5cl vodka",
        "1.5cl cin",
        "1.5cl rom",
        "1.5cl tekila",
        "1.5cl jagermeister",
        "1.5cl şeker şurubu",
        "1.5cl limon suyu",
        "Redbull tamamla"
      ],
      instructions: [
        "Tüm malzemeleri buzlu bardağa koyup hafifçe karıştırın"
      ],
      category: "Cocktail"
    },
    {
      id: 7,
      name: "Tequila Slammer",
      description: "Tekila ve sprite",
      ingredients: [
        "3cl tekila",
        "3cl sprite"
      ],
      instructions: [
        "Büyükçe bir bardağa tekila ve sprite'ı koyup peçete ile kapatın",
        "Bardağı masaya vurun"
      ],
      category: "Shot"
    },
    {
      id: 8,
      name: "Picador",
      description: "Tekila, triple sec ve limon suyu",
      ingredients: [
        "4.5cl tekila",
        "2.5cl triple sec",
        "2.5cl limon suyu"

      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Tuzlanmış soğuk kadehe süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 9,
      name: "Tequila Matador",
      description: "Tekila, ananas suyu ve limon suyu",
      ingredients: [
        "6cl tekila",
        "6cl ananas suyu",
        "2cl limon suyu"

      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Soğuk kadehe süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 10,
      name: "Jager Sandwich",
      description: "Bailey's, süt ve jagermeister",
      ingredients: [
        "Bailey's",
        "Süt",
        "Jagermeister"

      ],
      instructions: [
        "2/4 shot bardağı Bailey's üzerine kaşık yardımıyla yavaşça 1/4 süt ekleyin",
        "Yine kaşık yardımıyla yavaşça 1/4 shot bardağı jagermeister ekleyin",
      ],
      category: "Shot"
    },
    {
      id: 11,
      name: "Coronarita",
      description: "Corona, tekila, triple sec ve şeker şurubu",
      ingredients: [
        "1 şişe Corona",
        "3cl tekila",
        "1.5cl triple sec",
        "1.5cl şeker şurubu",
        "3cl limon suyu"
      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Tuzlanmış buzlu büyük bir bardağa süzün",
        "Corona şişesini bardağın içine ters şekilde saplayın"
      ],
      category: "Cocktail"
    },
    {
      id: 12,
      name: "Hibiscus Gin & Tonic",
      description: "Cin, limon suyu, hibiscus çayı ve tonik",
      ingredients: [
        "6cl cin",
        "3cl limon suyu",
        "6cl hibiscus çayı",
        "12cl tonik"
      ],
      instructions: [
        "Malzemeleri buzlu bardağa koyup karıştırın",
      ],
      category: "Cocktail"
    },
    {
      id: 13,
      name: "Charro Negro",
      description: "Tekila, limon suyu ve kola",
      ingredients: [
        "6cl tekila",
        "1.5cl limon suyu",
        "Kola tamamla"
      ],
      instructions: [
        "Malzemeleri buzlu bardağa koyup üzerini kola ile doldurun",
      ],
      category: "Cocktail"
    },
    {
      id: 14,
      name: "Enzoni",
      description: "Cin, campari, limon suyu, şeker şurubu ve üzüm",
      ingredients: [
        "3cl cin",
        "3cl campari",
        "2cl limon suyu",
        "5 üzüm",
        "1.5cl şeker şurubu"
      ],
      instructions: [
        "5 üzümü şeker şurubu ile shakerda ezin",
        "Kalan malzemeleri ve buzu ekleyip iyice çalkalayın",
        "Buzlu bardağa süzün"
      ],
      category: "Cocktail"
    },
    {
      id: 15,
      name: "Gold Rush",
      description: "Viski, limon suyu ve bal şurubu",
      ingredients: [
        "6cl viski",
        "3cl limon suyu",
        "2cl bal şurubu"
      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Buzlu bardağa süzün",
        "Limon kabuğuyla süsleyin"
      ],
      category: "Cocktail"
    },
    {
      id: 16,
      name: "Devil's Margarita",
      description: "Tekila, limon suyu, şeker şurubu ve triple sec",
      ingredients: [
        "4.5cl tekila",
        "3cl limon suyu",
        "0.75cl şeker şurubu",
        "2.25cl triple sec",
        "2 fıs sıvı tuz",
        "Kırmızı şarap tamamla"
      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Buzlu bardağa süzün",
        "Kaşık yardımıyla yavaşça üzerini kırmızı şarap ile doldurun"
      ],
      category: "Cocktail"
    },
    {
      id: 17,
      name: "Classic Daiquiri",
      description: "Rom, limon suyu ve şeker şurubu",
      ingredients: [
        "6cl rom",
        "3cl limon suyu",
        "2cl şeker şurubu",
      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Soğuk kadehe süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 18,
      name: "Jagerita",
      description: "Jagermeister, triple sec ve limon suyu",
      ingredients: [
        "4.5cl Jagermeister",
        "2.25cl triple sec",
        "3cl limon suyu",
        "0.75cl şeker şurubu",
      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Buzlu bardağa süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 19,
      name: "Adios, Motherfucker",
      description: "Vodka, rom, tekila, gin, blue curaçao, sprite",
      ingredients: [
        "1.5cl vodka",
        "1.5cl rom",
        "1.5cl tekila",
        "1.5cl gin",
        "1.5cl blue curaçao",
        "3cl limon suyu",
        "3cl şeker şurubu",
        "Sprite tamamla"
      ],
      instructions: [
        "Malzemeleri buzlu bardağa koyup karıştırın",
        "Üzerini sprite ile tamamlayın",
      ],
      category: "Cocktail"
    },
    {
      id: 20,
      name: "Long Island Iced Tea",
      description: "Vodka, rom, gin, tekila, triple sec, kola",
      ingredients: [
        "2.25cl vodka",
        "2.25cl rom",
        "2.25cl gin",
        "2.25cl tekila",
        "2.25cl triple sec",
        "2.25cl limon suyu",
        "2.25cl şeker şurubu",
        "Kola tamamla"
      ],
      instructions: [
        "Malzemeleri buzlu bardağa koyup karıştırın",
        "Üzerini kola ile tamamlayın",
      ],
      category: "Cocktail"
    },
    {
      id: 21,
      name: "Tequila Sunrise",
      description: "Tekila, portakal suyu ve grenadine",
      ingredients: [
        "6cl tekila",
        "12cl portakal suyu",
        "0.75cl grenadine",
      ],
      instructions: [
        "Malzemeleri buzlu bardağa koyup servis edin",
      ],
      category: "Cocktail"
    },
    {
      id: 22,
      name: "Cum In A Hot Tub",
      description: "Vodka, rom ve Bailey's",
      ingredients: [
        "2/4 vodka",
        "1/4 rom",
        "3-5 damla Bailey's",
      ],
      instructions: [
        "Malzemeleri shotbardağında koyup servis edin",
      ],
      category: "Shot"
    },
    {
      id: 23,
      name: "Mojito",
      description: "Rom, limon suyu, şeker şurubu ve nane, sprite",
      ingredients: [
        "6cl rom",
        "2.25cl limon suyu",
        "1.5cl şeker şurubu",
        "3 yaprak taze nane",
        "Sprite tamamla"
      ],
      instructions: [
        "Naneleri şurup ile shaker içinde ezin",
        "Kalan malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Kırık buzla dolu bardağa süzün",
        "Sprite ile tamamlayın",
      ],
      category: "Cocktail"
    },
    {
      id: 24,
      name: "Golden Glove",
      description: "Rom, triple sec, limon suyu ve şeker şurubu",
      ingredients: [
        "6cl rom",
        "1 çay kaşığı triple sec",
        "1.5cl limon suyu",
        "1 çay kaşığı toz şeker"
      ],
      instructions: [
        "Tüm malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Kırık buzla dolu bardağa süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 25,
      name: "Shirley Temple",
      description: "Grenadine, limon suyu ve zencefilli gazoz",
      ingredients: [
        "1.5cl grenadine",
        "0.75cl limon suyu",
        "15cl zencefilli gazoz",
      ],
      instructions: [
        "Tüm malzemeleri buzlu bardağa koyup hafifçe karıştırın",
      ],
      category: "Mocktail"
    },
    {
      id: 26,
      name: "Mint-Basil Limeade",
      description: "Fesleğen, nane, şeker şurubu, limon suyu ve sprite",
      ingredients: [
        "4 yaprak fesleğen",
        "4 yaprak nane",
        "3cl şeker şurubu",
        "3cl limon suyu",
        "Sprite tamamla"
      ],
      instructions: [
        "Nane ve fesleğeni şurup ile shaker içinde ezin",
        "Kalan malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Buzla dolu bardağa süzün",
        "Sprite ile tamamlayın",
      ],
      category: "Mocktail"
    },
    {
      id: 27,
      name: "Moscow Mule",
      description: "Vodka, limon suyu ve zencefilli gazoz",
      ingredients: [
        "6cl vodka",
        "1.5cl limon suyu",
        "Zencefilli gazoz tamamla",
      ],
      instructions: [
        "Tüm malzemeleri buzlu bardağa koyun",
        "Üzerini zencefilli gazoz ile tamamlayın",
      ],
      category: "Cocktail"
    },
    {
      id: 28,
      name: "Negroni",
      description: "Cin, Campari, tatlı vermut",
      ingredients: [
        "3cl cin",
        "3cl Campari",
        "3cl tatlı vermut",
        "Portakal kabuğu"
      ],
      instructions: [
        "Malzemeleri buzlu bardağa koyun ve karıştırın",
        "Buzlu bardağa süzün ve portakal kabuğunu ekleyin",
      ],
      category: "Cocktail"
    },
    {
      id: 29,
      name: "Dirty Shirley",
      description: "Vodka, grenadine ve sprite",
      ingredients: [
        "6cl vodka",
        "3cl grenadine",
        "Sprite tamamla"
      ],
      instructions: [
        "Malzemeleri buzlu bardağa koyup üzerini sprite ile tamamlayın",
        "Hafifçe karışıtırın ve servis edin"
      ],
      category: "Cocktail"
    },
    {
      id: 30,
      name: "Kamikaze",
      description: "Vodka, triple sec ve limon suyu",
      ingredients: [
        "6cl vodka",
        "2.25cl triple sec",
        "2.25cl limon suyu",
      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "2 büyükçe shot bardağına süzün",
      ],
      category: "Shot"
    },
    {
      id: 31,
      name: "Blue Hawaii",
      description: "Vodka, rom, blue curaçao, ananas suyu, limon suyu ve şeker şurubu",
      ingredients: [
        "2.25cl vodka",
        "2.25cl rom",
        "1.5cl Blue Curaçao",
        "9cl ananas suyu",
        "1.5cl limon suyu",
        "1.5cl şeker şurubu",
      ],
      instructions: [
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Kırık buzla dolu kadehe süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 32,
      name: "Lemon Drop",
      description: "Vodka, triple sec, limon suyu ve şeker şurubu",
      ingredients: [
        "6cl vodka",
        "1.5cl triple sec",
        "3cl limon suyu",
        "3cl şeker şurubu",
      ],
      instructions: [
        "Kadehin kenarlarını şeker ile kaplayın",
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Hazırladığınız kadehe süzün",
      ],
      category: "Cocktail"
    },
    {
      id: 33,
      name: "Margarita",
      description: "Tekila, triple sec, limon suyu ve şeker şurubu",
      ingredients: [
        "6cl Tekila",
        "1.5cl triple sec",
        "3cl limon suyu",
        "1.5cl şeker şurubu"
      ],
      instructions: [
        "Kadehin kenarlarını tuz ile kaplayın",
        "Malzemeleri shaker'a koyup buzla iyice çalkalayın",
        "Hazırladığınız kadehe süzün",
      ],
      category: "Cocktail"
    }
  ],
};
