import IconChicken from "$lib/images/chicken.svg"
import IconFish from "$lib/images/fish.svg"
import IconDuck from "$lib/images/duck.svg"
import IconPig from "$lib/images/pig.svg"
import IconCow from "$lib/images/cow.svg"
import IconSheep from "$lib/images/sheep.svg"
import IconRabbit from "$lib/images/rabbit.svg"
import IconTurkey from "$lib/images/turkey.svg"
import IconGoose from "$lib/images/goose.svg"
import IconGoat from "$lib/images/goat.svg"
import IconBuffalo from "$lib/images/buffalo.svg"
import IconCamel from "$lib/images/camel.svg"
import IconPigeon from "$lib/images/pigeon.svg"
import IconHorse from "$lib/images/horse.svg"
import IconDeer from "$lib/images/deer.svg"
import IconDog from "$lib/images/dog.svg"
import IconRodent from "$lib/images/rodent.svg"
import IconShark from "$lib/images/shark.svg"

export const Data = {
  Chicken: {
    name: "Chickens",
    slug: "chickens",
    icon: IconChicken,
    annually: 70_000_000_000,
    sources: ["https://www.biologicaldiversity.org/takeextinctionoffyourplate/pdfs/ChickenFactsheet.pdf", "https://epar.evans.uw.edu/research/environmental-implications-livestock-chickens", "https://ourworldindata.org/how-many-animals-get-slaughtered-every-day", "https://www.al.org.au/how-many-chickens-die-every-year"],
    description: `
      <p>Chickens are farmed primarily for consumption.</p>
      <p>Chickens meant for consumption are bred to get as large as possible as fast as possible. This often leads to severe health problems such as skeletal deforminities, organ failure, and intense pain. They are typically killed after just 5 to 7 weeks old, after living a short live in overcrowded and stressful conditions.</p>
      <p>Egg laying chickens are often kept in battery cages or crowded barns, with limited space to move. They are bred in a way that forces them to produce a new egg almost daily, where as more naturally developed chickens only lay 10 to 15 eggs per year.</p>
      <p>Chicken farming primarily involves female chickens. The practice of killing male chicks shortly after hatching results in the deaths of billions of chicks annually.</p>

      <h3>Environmental impact</h3>
      <p>Chicken farming is has a significant environmental footprint. Large-scale operations produce substantial amounts of waste, contributing to soil, water, and air pollution. The grain and soy used to feed chickens are often grown using unsustainable farming practices, leading to deforestation, loss of biodiversity, and significant greenhouse gas emissions.</p>

      <h3>Health concerns</h3>
      <p>The consumption of chicken and eggs has been linked to various health issues. The widespread use of antibiotics can contribute to antibiotic-resistant bacteria. Industrial chicken farming practices can lead to outbreaks of diseases such as salmonella and avian influenza. There are also concerns about the nutritional quality of poultry products, with high levels of cholesterol and saturated fats associated with increased risks of heart disease and other health conditions.</p>
    `
  },
  Fish: {
    name: "Fish",
    slug: "fish",
    icon: IconFish,
    annually: 1_500_000_000_000,
    sources: ["https://www.nationalgeographic.com/science/article/global-industrial-fishing-footprint-spd", "https://www.worldwildlife.org/threats/overfishing", "https://www.pewtrusts.org/en/research-and-analysis/issue-briefs/2022/11/more-than-100000-fishing-related-deaths-occur-each-year-study-finds"],
    description: `
      <p>Fishing is primarily done in the open ocean, rather than farms. Nets are cast and will catch anything caught within them. Many of the fish caught are not intended to be caught, including dolphins, turtles, and even seabirds, causing unnecessary harm. But even the fish that were intended to be caught suffer in droves. The fish are all squished together in the net the fish and up suffocating. Those that are not killed by suffocation are brought to the surface and end up dying due to a lack of water. In either case the animals end up dying a slow and painful death.</p>

      <h3>Destruction of coral reefs</h3>
      <p>As fishing nets drag across the ocean floor they destroy critical habitats such as coral reefs and seagrass beds. These habitats are essentially for reproduction and survival of many ocean animals. Coral reefs are crucial in sustaining life all across the earth, providing places to live, feed, and procreate. Additionally, they are vital in reducing the effects of climate, acting as carbon sinks. Reefs even protect coastlines from erosion. With their destruction climate change will worsen, killing even more in the process.</p>
    `
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
    sources: ["https://www.ciwf.org.uk/farm-animals/rabbits/#:~:text=keep%20them%20safe.-,Rabbit%20farming%20today,in%20China%20(FAOSTAT%202017)..", "https://sentientmedia.org/how-many-animals-are-killed-for-food-every-day/", "https://www.fao.org/faostat/en/#data/QCL"],
    description: `
      <p>Rabbits are farmed for various purposes including meat, fur, wool, and to keep as pets.<p>
      <p>Rabbits are kept in confined spaces, keeping them from there natural behaviours of digging, hopping around, and social interaction. This can lead to several stress and health issues.</p>
      <p>They are farmed for their fur, which is often plucked while the animal is still alive and concious. When the fur itself is no longer profitable the animals are slaughtered for their meat. This is done through several methods including breaking necks, electrocution, or blunt force trauma. These methods are inconsistent which, if not performed correctly, can cause unnecessary suffering.<p>

      <h3>Environmental concerns</h3>
      <p>Rabbits use a substantial amount of resources, requiring large amounts of water and land to produce crops. The waste produced from keeping these animals (such as manure and cacasses) is substatial, leading to water and land pollution, affecting ecosystems and potentially contaminating water supplies.</p>

      <h3>Health concerns</h3>
      <p>Rabbits are susceptible to many diseases. The close quarters at which they are kept allow these diseases to spread rapidly, which has been known to spread to wild rabbits as well. Some diseases can spread to humans as well, presenting health risks for workers are nearby communities.</p>
      <p>To manage diseases, antibiotics are used. Overuse can contribute to the development of antibiotic-resistant bacteria within the rabbits. The presence of antibiotics can pose risks to consumers as well.</p>
    `,
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
  Shark: {
    name: "Sharks",
    slug: "sharks",
    icon: IconShark,
    annually: 80_000_000,
    exclude_from_total: true,
    sources: ["https://www.science.org/doi/10.1126/science.adf8984", "https://www.greenpeace.org/international/story/46967/100-million-dead-sharks-its-not-all-about-shark-fin-soup/", "https://www.eoceans.org/sharks-and-rays/100-million-sharks-killed-each-year", "https://www.smithsonianmag.com/smart-news/sharks-are-being-killed-at-rising-rates-despite-increased-regulations-180983593/"],
    description: ``
  }
}
