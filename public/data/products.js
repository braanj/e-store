const PRODUCTS =
  [
    {
      "name": "T-shirt en coton",
      "price": 19.99,
      "description": "T-shirt en coton doux et confortable, disponible en plusieurs tailles et couleurs.",
      "coupon": 10,
      "stars": 4.5
    },
    {
      "name": "Chaussures de course",
      "price": 89.99,
      "description": "Chaussures de course légères et respirantes, parfaites pour les longues distances.",
      "coupon": 20,
      "stars": 4
    },
    {
      "name": "Sac à dos en cuir",
      "price": 129.99,
      "description": "Sac à dos en cuir véritable avec de nombreuses poches et compartiments.",
      "coupon": null,
      "stars": 4.8
    },
    {
      "name": "Pantalon cargo",
      "price": 59.99,
      "description": "Pantalon cargo résistant et pratique, idéal pour les activités extérieures.",
      "coupon": 15,
      "stars": 3.9
    },
    {
      "name": "Blouse en soie",
      "price": 79.99,
      "description": "Blouse en soie légère et élégante, disponible en plusieurs couleurs.",
      "coupon": 5,
      "stars": 4.2
    },
    {
      "name": "Montre-bracelet en acier inoxydable",
      "price": 149.99,
      "description": "Montre-bracelet élégante et résistante avec un bracelet en acier inoxydable.",
      "coupon": 25,
      "stars": 4.6
    },
    {
      "name": "Lunettes de soleil polarisées",
      "price": 39.99,
      "description": "Lunettes de soleil polarisées avec une monture légère et confortable.",
      "coupon": null,
      "stars": 3.8
    },
    {
      "name": "Chemise à carreaux",
      "price": 49.99,
      "description": "Chemise à carreaux douce et confortable, parfaite pour les tenues décontractées.",
      "coupon": 10,
      "stars": 4.1
    },
    {
      "name": "Bottines en cuir",
      "price": 119.99,
      "description": "Bottines en cuir véritable avec une semelle résistante et antidérapante.",
      "coupon": 15,
      "stars": 4.3
    },
    {
      "name": "Veste en jean",
      "price": 69.99,
      "description": "Veste en jean décontractée et tendance, disponible en plusieurs tailles.",
      "coupon": null,
      "stars": 3.7
    },
    {
      "name": "Boucles d'oreilles en argent",
      "price": 29.99,
      "description": "Boucles d'oreilles en argent sterling avec des cristaux Swarovski.",
      "coupon": 5,
      "stars": 4.6
    },
    {
      "name": "Sweat à capuche",
      "price": 79.99,
      "description": "Sweat à capuche doux et confortable, parfait pour les journées fraîches.",
      "coupon": null,
      "stars": 4.2
    },
    {
      "name": "Short de bain",
      "price": 39.99,
      "description": "Short de bain léger et résistant avec un cordon de serrage pour un ajustement parfait.",
      "coupon": 10,
      "stars": 3.9
    },
    {
      "name": "Pendentif en or",
      "price": 149.99,
      "description": "Pendentif en or 18 carats avec un diamant véritable.",
      "coupon": 20,
      "stars": 4.8
    },
    {
      "name": "Chapeau en laine",
      "price": 29.99,
      "description": "Chapeau en laine douce et chaude avec un pompon en fourrure synthétique.",
      "coupon": null,
      "stars": 4.1
    },
    {
      "name": "Chemise en lin",
      "price": 59.99,
      "description": "Chemise en lin léger et respirant, parfaite pour les journées chaudes.",
      "coupon": 15,
      "stars": 4.2
    },
    {
      "name": "Tapis de yoga",
      "price": 49.99,
      "description": "Tapis de yoga antidérapant avec un design coloré et une épaisseur de 6 mm.",
      "coupon": null,
      "stars": 4.6
    },
    {
      "name": "Bague en argent",
      "price": 69.99,
      "description": "Bague en argent sterling avec une pierre naturelle de votre choix.",
      "coupon": 10,
      "stars": 4.3
    },
    {
      "name": "Sacoche en cuir",
      "price": 119.99,
      "description": "Sacoche en cuir véritable avec une bandoulière réglable et plusieurs poches.",
      "coupon": null,
      "stars": 3.8
    },
    {
      "name": "Montre connectée",
      "price": 199.99,
      "description": "Montre connectée avec un écran tactile, des fonctionnalités de suivi de la santé et de la forme physique.",
      "coupon": 25,
      "stars": 4.7
    },
    {
      "name": "Casquette de baseball",
      "price": 19.99,
      "description": "Casquette de baseball légère et respirante, disponible en plusieurs couleurs.",
      "coupon": null,
      "stars": 4.2
    },

    {
      "name": "Boucles d'oreilles en argent",
      "price": 29.99,
      "description": "Boucles d'oreilles en argent sterling avec des cristaux Swarovski.",
      "coupon": 5,
      "stars": 4.6
    },
    {
      "name": "Sweat à capuche",
      "price": 79.99,
      "description": "Sweat à capuche doux et confortable, parfait pour les journées fraîches.",
      "coupon": null,
      "stars": 4.2
    },
    {
      "name": "Short de bain",
      "price": 39.99,
      "description": "Short de bain léger et résistant avec un cordon de serrage pour un ajustement parfait.",
      "coupon": 10,
      "stars": 3.9
    },
    {
      "name": "Pendentif en or",
      "price": 149.99,
      "description": "Pendentif en or 18 carats avec un diamant véritable.",
      "coupon": 20,
      "stars": 4.8
    },
    {
      "name": "Chapeau en laine",
      "price": 29.99,
      "description": "Chapeau en laine douce et chaude avec un pompon en fourrure synthétique.",
      "coupon": null,
      "stars": 4.1
    },
    {
      "name": "Chemise en lin",
      "price": 59.99,
      "description": "Chemise en lin léger et respirant, parfaite pour les journées chaudes.",
      "coupon": 15,
      "stars": 4.2
    },
    {
      "name": "Tapis de yoga",
      "price": 49.99,
      "description": "Tapis de yoga antidérapant avec un design coloré et une épaisseur de 6 mm.",
      "coupon": null,
      "stars": 4.6
    },
    {
      "name": "Bague en argent",
      "price": 69.99,
      "description": "Bague en argent sterling avec une pierre naturelle de votre choix.",
      "coupon": 10,
      "stars": 4.3
    },
    {
      "name": "Sacoche en cuir",
      "price": 119.99,
      "description": "Sacoche en cuir véritable avec une bandoulière réglable et plusieurs poches.",
      "coupon": null,
      "stars": 3.8
    },
    {
      "name": "Montre connectée",
      "price": 199.99,
      "description": "Montre connectée avec un écran tactile, des fonctionnalités de suivi de la santé et de la forme physique.",
      "coupon": 25,
      "stars": 4.7
    },
    {
      "name": "Casquette de baseball",
      "price": 19.99,
      "description": "Casquette de baseball légère et respirante, disponible en plusieurs couleurs.",
      "coupon": null,
      "stars": 4.2
    },

    {
      "name": "Boucles d'oreilles en argent",
      "price": 29.99,
      "description": "Boucles d'oreilles en argent sterling avec des cristaux Swarovski.",
      "coupon": 5,
      "stars": 4.6
    },
    {
      "name": "Sweat à capuche",
      "price": 79.99,
      "description": "Sweat à capuche doux et confortable, parfait pour les journées fraîches.",
      "coupon": null,
      "stars": 4.2
    },
    {
      "name": "Short de bain",
      "price": 39.99,
      "description": "Short de bain léger et résistant avec un cordon de serrage pour un ajustement parfait.",
      "coupon": 10,
      "stars": 3.9
    },
    {
      "name": "Pendentif en or",
      "price": 149.99,
      "description": "Pendentif en or 18 carats avec un diamant véritable.",
      "coupon": 20,
      "stars": 4.8
    },
    {
      "name": "Chapeau en laine",
      "price": 29.99,
      "description": "Chapeau en laine douce et chaude avec un pompon en fourrure synthétique.",
      "coupon": null,
      "stars": 4.1
    },
    {
      "name": "Chemise en lin",
      "price": 59.99,
      "description": "Chemise en lin léger et respirant, parfaite pour les journées chaudes.",
      "coupon": 15,
      "stars": 4.2
    },
    {
      "name": "Tapis de yoga",
      "price": 49.99,
      "description": "Tapis de yoga antidérapant avec un design coloré et une épaisseur de 6 mm.",
      "coupon": null,
      "stars": 4.6
    },
    {
      "name": "Bague en argent",
      "price": 69.99,
      "description": "Bague en argent sterling avec une pierre naturelle de votre choix.",
      "coupon": 10,
      "stars": 4.3
    },
    {
      "name": "Sacoche en cuir",
      "price": 119.99,
      "description": "Sacoche en cuir véritable avec une bandoulière réglable et plusieurs poches.",
      "coupon": null,
      "stars": 3.8
    },
    {
      "name": "Montre connectée",
      "price": 199.99,
      "description": "Montre connectée avec un écran tactile, des fonctionnalités de suivi de la santé et de la forme physique.",
      "coupon": 25,
      "stars": 4.7
    },
    {
      "name": "Casquette de baseball",
      "price": 19.99,
      "description": "Casquette de baseball légère et respirante, disponible en plusieurs couleurs.",
      "coupon": null,
      "stars": 4.2
    }
  ]
