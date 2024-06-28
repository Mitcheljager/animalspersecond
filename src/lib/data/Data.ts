import IconChicken from "$lib/images/chicken.svg"
import IconFish from "$lib/images/fish.svg"
import IconDuck from "$lib/images/Duck.svg"
import IconPig from "$lib/images/Pig.svg"
import IconCow from "$lib/images/Cow.svg"
import IconSheep from "$lib/images/Sheep.svg"
import IconRabbit from "$lib/images/Rabbit.svg"
import IconTurkey from "$lib/images/Turkey.svg"
import IconGoose from "$lib/images/Goose.svg"
import IconGoat from "$lib/images/Goat.svg"
import IconBuffalo from "$lib/images/Buffalo.svg"
import IconCamel from "$lib/images/Camel.svg"
import IconPigeon from "$lib/images/Pigeon.svg"
import IconHorse from "$lib/images/Horse.svg"
import IconDeer from "$lib/images/Deer.svg"
import IconKangaroo from "$lib/images/Kangaroo.svg"
import IconDog from "$lib/images/Dog.svg"
import IconRodent from "$lib/images/Rodent.svg"

export const Data = {
  Chicken: {
    name: "Chickens",
    slug: "chickens",
    icon: IconChicken,
    annually: 70_000_000_000,
    sources: [],
    description: `
      <p>Chickens are farmed primarily for consumption.</p>
      <p>Broiler chickens are bred for rapid growth, often leading to severe health problems such as skeletal deformities, organ failure, and chronic pain. These chickens are typically slaughtered at just 5 to 7 weeks old, having lived short lives in overcrowded and stressful conditions. Layer hens, bred for egg production, are confined to battery cages or crowded barns, with limited space to move and engage in natural behaviors.</p>
      <p>Chicken farming primarily involves female chickens. The practice of culling male chicks shortly after hatching results in the deaths of billions of chicks annually.</p>

      <h3>Environmental impact</h3>
      <p>The environmental footprint of chicken farming is significant. Large-scale operations generate substantial amounts of waste, contributing to soil, water, and air pollution. The grain and soy used to feed chickens are often grown using unsustainable farming practices, leading to deforestation, loss of biodiversity, and significant greenhouse gas emissions.</p>

      <h3>Health concerns</h3>
      <p>The consumption of chicken and eggs has been linked to various health issues. The widespread use of antibiotics in poultry farming can contribute to antibiotic-resistant bacteria. Industrial chicken farming practices can lead to outbreaks of diseases such as salmonella and avian influenza. There are also concerns about the nutritional quality of poultry products, with high levels of cholesterol and saturated fats associated with increased risks of heart disease and other health conditions.</p>
    `
  },
  Fish: {
    name: "Fish",
    slug: "fish",
    icon: IconFish,
    annually: 1_500_000_000_000,
    sources: [],
    description: ``
  },
  Pig: {
    name: "Pigs",
    slug: "pigs",
    icon: IconPig,
    annually: 1_500_000_000,
    sources: [],
    description: ``
  },
  Duck: {
    name: "Ducks",
    slug: "ducks",
    icon: IconDuck,
    annually: 3_000_000_000,
    sources: [],
    description: ``
  },
  Cow: {
    name: "Cows",
    slug: "cows",
    icon: IconCow,
    annually: 300_000_000,
    sources: [],
    description: ``
  },
  Sheep: {
    name: "Sheep",
    slug: "sheep",
    icon: IconSheep,
    annually: 550_000_000,
    sources: [],
    description: ``
  },
  Rabbit: {
    name: "Rabbits",
    slug: "Rabbits",
    icon: IconRabbit,
    annually: 1_000_000_000,
    sources: ["https://www.ciwf.org.uk/farm-animals/rabbits/#:~:text=keep%20them%20safe.-,Rabbit%20farming%20today,in%20China%20(FAOSTAT%202017)..", "https://sentientmedia.org/how-many-animals-are-killed-for-food-every-day/", "https://www.fao.org/faostat/en/#data/QCL"]
  },
  Turkey: {
    name: "Turkeys",
    slug: "turkeys",
    icon: IconTurkey,
    annually: 650_000_000,
    sources: [],
    description: ``
  },
  Goose: {
    name: "Geese",
    slug: "geese",
    icon: IconGoose,
    annually: 700_000_000,
    sources: [],
    description: ``
  },
  Goat: {
    name: "Goats",
    slug: "goats",
    icon: IconGoat,
    annually: 450_000_000,
    sources: [],
    description: ``
  },
  Buffalo: {
    name: "Buffalo",
    slug: "buffalo",
    icon: IconBuffalo,
    annually: 24_000_000,
    sources: [],
    description: ``
  },
  Camel: {
    name: "Camels",
    slug: "camels",
    icon: IconCamel,
    annually: 3_000_000,
    sources: [],
    description: ``
  },
  Pigeon: {
    name: "Pigeons (and other birds)",
    slug: "pigeons",
    icon: IconPigeon,
    annually: 45_000_000,
    sources: [],
    description: ``
  },
  Horse: {
    name: "Horses",
    slug: "horses",
    icon: IconHorse,
    annually: 4_500_000,
    sources: [],
    description: ``
  },
  Deer: {
    name: "Deer",
    slug: "deer",
    icon: IconDeer,
    annually: 10_000_000,
    sources: [],
    description: ``
  },
  Kangaroo: {
    name: "Kangaroos",
    slug: "kangaroos",
    icon: IconKangaroo,
    annually: 3_000_000,
    sources: [],
    description: ``
  },
  Dog: {
    name: "Dogs",
    slug: "dogs",
    icon: IconDog,
    annually: 25_000_000,
    sources: [],
    description: ``
  },
  Rodent: {
    name: "Rodents",
    slug: "rodents",
    icon: IconRodent,
    annually: 70_000_000,
    sources: [],
    description: ``
  },
}
