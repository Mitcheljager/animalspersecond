import { Category } from "./Category"
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
import IconCricket from "$lib/images/cricket.svg"
import IconMealworms from "$lib/images/mealworm.svg"
import IconFly from "$lib/images/fly.svg"
import IconBee from "$lib/images/bee.svg"

export const Data = {
  Chicken: {
    name: "Chickens",
    slug: "chickens",
    category: Category.Land,
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
    category: Category.Ocean,
    icon: IconFish,
    annually: 1_500_000_000_000,
    sources: ["https://www.nationalgeographic.com/science/article/global-industrial-fishing-footprint-spd", "https://www.worldwildlife.org/threats/overfishing", "https://www.pewtrusts.org/en/research-and-analysis/issue-briefs/2022/11/more-than-100000-fishing-related-deaths-occur-each-year-study-finds", "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2020.6148"],
    description: `
      <p>Fishing is primarily done in the open ocean, rather than farms. Nets are cast and will catch anything caught within them. Many of the fish caught are not intended to be caught, including dolphins, turtles, and even seabirds, causing unnecessary harm. But even the fish that were intended to be caught suffer in droves. The fish are all squished together in the net the fish and up suffocating. Those that are not killed by suffocation are brought to the surface and end up dying due to a lack of water. In either case the animals end up dying a slow and painful death.</p>

      <h3>Destruction of coral reefs</h3>
      <p>As fishing nets drag across the ocean floor they destroy critical habitats such as coral reefs and seagrass beds. These habitats are essentially for reproduction and survival of many ocean animals. Coral reefs are crucial in sustaining life all across the earth, providing places to live, feed, and procreate. Additionally, they are vital in reducing the effects of climate, acting as carbon sinks. Reefs even protect coastlines from erosion. With their destruction climate change will worsen, killing even more in the process.</p>

      <h3>Ocean trash</h3>
      <p>A large percentage of the ocean's trash is as the direct result of fishing. Fishing boats leave behind their nets, supplies, and more, all resulting in large amount of trash. This trash ends up killing all sorts of marine life through suffocation, digestion of the trash, or from getting stuck.</p>
    `
  },
  Pig: {
    name: "Pigs",
    slug: "pigs",
    category: Category.Land,
    icon: IconPig,
    annually: 1_500_000_000,
    sources: ["https://ourworldindata.org/how-many-animals-get-slaughtered-every-day", "https://www.roysfarm.com/pig-farming/", "https://faunalytics.org/global-animal-slaughter-statistics-charts-2022-update/", "https://www.sinergiaanimalinternational.org/single-post/slaughterhouses"],
    description: `
      <p>Pigs are primarily farmed for food, as well as for their skin. They are also used for cosmetics and medical use. Half of this is done in China, but pigs are farmed world-wide.</p>
      <p>Pigs are kept in small confined and crowded spaces. The stress this causes leads to agressive behaviour amongst the pigs. To combat this pigs tails and teeth are often trimmed to prevent them from harming each other. This is often done without any sort of anethesia, causing immense pain. The confined spaces lead to severe health issues are the animals are not able to excerise their muscles. They often end up laying in the same position for a long time, leading to sores, muscle fatigue, and bone damage. All of which is painful and often left untreated.</p>
      <p>Pigs are artifically impregnated, forcing them to have offspring. While pregant and after giving birth the piglets are kept in a small cage together their mother so they can constantly feed. The small space may lead to piglets getting crushed by their mother, as there isn't enough space for her to move effectively. They may also die due to diseases due to poor conditions, or starvation as the piglets fight for access to the mother's milk.</p>

      <h3>Slaughter</h3>
      <p>When the pigs are ready for slaughter their are transported away from the farm. While in transport, which may be a long journey, many pigs end up killed due to poor conditions from overcrowding. The overcrowding results in significant distress, leading to injuries, and worse. In the slaughterhouse pigs are often stunned before being slaughtered. This is done either through electrical stunning, gas, or through a mechanical blow to the head. After stunning the pigs are hung from their legs and their throats are cut to allow blood to drain out. Stunning is not always effective and many pigs end up being concious while bleeding out, leading to immense pain and distress before their death.</p>

      <h3>Environmental impact</h3>
      <p>The pigs produce large amounts of waste which end up contaminating soil or water soils if not taken care off properly. Additionally pigs produce a lot of methane and ammonia emissions, contributing to greenhouse gases.</p>

      <h3>Health concerns</h3>
      <p>To fight diseases amongst the pigs, high levels of antibiotics are used. The antibiotics end up in the final product, consumption might end up with a build up of antibiotics-resistant bactiara in humans. Additionally diseases can spread rapidly amongst the pigs, some of which many be transfered from pigs to humans.</p>
    `
  },
  Duck: {
    name: "Ducks",
    slug: "ducks",
    category: Category.Land,
    icon: IconDuck,
    annually: 3_000_000_000,
    sources: ["https://ourworldindata.org/grapher/animals-slaughtered-for-meat?facet=metric&uniformYAxis=0", "https://www.barnsanctuary.org/the-barn-blog/learn-about-ducks", "https://www.dpi.nsw.gov.au/__data/assets/pdf_file/0009/442854/introduction-to-commercial-duck-farming.pdf"],
    description: `
      <p>Ducks are farmed primarily for consumption of meat, eggs, and foie gras (fatty liver). China is one of the most significant producers, but ducks are farmed globally at a large scale.</p>

      <h3>Farming conditions</h3>
      <p>Most ducks are killed in farms without any access to water. Ducks spend most of their time swimming and their legs are not capable of standing on their legs for an extended period of time, let alone their entire lives. As a result they can't properly developer their leg and foot muscles, leading to cronic discomfort and pain. These farm environments are overcrowded, causing immense stress, and leading to the ducks plucking their own feathers and attacking other ducks. As a means to lessen the impact their beaks and feet are snipped. This is often done without anesthesia, leading to unnecessary suffering or even death. Ducks are slaughtered after only 7 weeks of age, after being grown at unnatural rates. When ducks are transported to the slaughterhouses this is often done in extremely tight quarters, with many ducks dying from suffocation, heat, cold, or lack of food and water.</p>

      <h3>Foie gras</h3>
      <p>Ducks that are farmed for foie gras are kept in tiny cages where they are force fed over a period of several weeks. Pipes are forced down their throat and food is directly pumped into their stomach in order to fatten them up as quickly as possible. This process is extremely painful and leads to immense stress and depression. Only male ducks are used for foie gras, with female ducks either being culled or raised for meat instead.</p>

      <h3>Hunting</h3>
      <p>Many ducks are killed through hunting. This is done either in the wild, or in some cases ducks are raised to be hunted for sport and leasure. Hunting ducks often leads to unnecessary harm as ducks are often injured and maimed, rather than killed out right. While hunting is often regulated, it still often leads to a decline in duck populations which affects biodiversity. Wild ducks play a curcial role in their ecosystems, including controlling insect and dispersing seeds. Their decline can have a lasting effect on everything around them.</p>
    `
  },
  Cow: {
    name: "Cows",
    slug: "cows",
    category: Category.Land,
    icon: IconCow,
    annually: 300_000_000,
    sources: [],
    description: ``
  },
  Sheep: {
    name: "Sheep",
    slug: "sheep",
    category: Category.Land,
    icon: IconSheep,
    annually: 550_000_000,
    sources: [],
    description: ``
  },
  Rabbit: {
    name: "Rabbits",
    slug: "Rabbits",
    category: Category.Land,
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
    category: Category.Land,
    icon: IconTurkey,
    annually: 650_000_000,
    sources: [],
    description: ``
  },
  Goose: {
    name: "Geese",
    slug: "geese",
    category: Category.Land,
    icon: IconGoose,
    annually: 700_000_000,
    sources: [],
    description: ``
  },
  Goat: {
    name: "Goats",
    slug: "goats",
    category: Category.Land,
    icon: IconGoat,
    annually: 450_000_000,
    sources: [],
    description: ``
  },
  Buffalo: {
    name: "Buffalo",
    slug: "buffalo",
    category: Category.Land,
    icon: IconBuffalo,
    annually: 24_000_000,
    sources: [],
    description: ``
  },
  Camel: {
    name: "Camels",
    slug: "camels",
    category: Category.Land,
    icon: IconCamel,
    annually: 3_000_000,
    sources: [],
    description: ``
  },
  Pigeon: {
    name: "Pigeons (and other birds)",
    slug: "pigeons",
    category: Category.Land,
    icon: IconPigeon,
    annually: 45_000_000,
    sources: [],
    description: ``
  },
  Horse: {
    name: "Horses",
    slug: "horses",
    category: Category.Land,
    icon: IconHorse,
    annually: 4_500_000,
    sources: [],
    description: ``
  },
  Deer: {
    name: "Deer",
    slug: "deer",
    category: Category.Land,
    icon: IconDeer,
    annually: 10_000_000,
    sources: [],
    description: ``
  },
  Dog: {
    name: "Dogs",
    slug: "dogs",
    category: Category.Land,
    icon: IconDog,
    annually: 25_000_000,
    sources: [],
    description: ``
  },
  Rodent: {
    name: "Rodents",
    slug: "rodents",
    category: Category.Land,
    icon: IconRodent,
    annually: 70_000_000,
    sources: [],
    description: ``
  },
  Shark: {
    name: "Sharks",
    slug: "sharks",
    category: Category.Ocean,
    icon: IconShark,
    annually: 80_000_000,
    sources: ["https://www.science.org/doi/10.1126/science.adf8984", "https://www.greenpeace.org/international/story/46967/100-million-dead-sharks-its-not-all-about-shark-fin-soup/", "https://www.eoceans.org/sharks-and-rays/100-million-sharks-killed-each-year", "https://www.smithsonianmag.com/smart-news/sharks-are-being-killed-at-rising-rates-despite-increased-regulations-180983593/"],
    description: ``
  },
  BlackSoldierFly: {
    name: "Black Soldier Flies",
    slug: "black-soldier-flies",
    category: Category.Insect,
    icon: IconFly,
    annually: 200_000_000_000,
    sources: ["https://rethinkpriorities.org/publications/welfare-considerations-for-farmed-black-soldier-flies-hermetia-illucens", "https://rethinkpriorities.org/publications/insects-raised-for-food-and-feed"],
    description: ``
  },
  Cricket: {
    name: "Crickets",
    slug: "crickets",
    category: Category.Insect,
    icon: IconCricket,
    annually: 400_000_000_000,
    sources: ["https://rethinkpriorities.org/publications/insects-raised-for-food-and-feed", "https://www.businessinsider.com/how-50-million-crickets-harvested-a-week-become-food-2021-4?international=true&r=US&IR=T"],
    description: ``
  },
  Mealworm: {
    name: "Mealworms",
    slug: "mealworms",
    category: Category.Insect,
    icon: IconMealworms,
    annually: 300_000_000_000,
    sources: ["https://rethinkpriorities.org/publications/insects-raised-for-food-and-feed", "https://bootstrapbee.com/smallholding/is-mealworm-farming-profitable"],
    description: ``
  },
  Bee: {
    name: "Bees",
    slug: "bees",
    category: Category.Insect,
    icon: IconBee,
    annually: 1_300_000_000_000,
    sources: ["https://www.destatis.de/EN/Themes/Countries-Regions/International-Statistics/Data-Topic/AgricultureForestryFisheries/Bees.html", "https://www.statista.com/topics/5090/honey-market-worldwide/"],
    description: `
      <p>This number is derived from a low estimate of 101.6 million beehives world wide, each housing an average of 45 thousand bees. Bees are active for a period of roughly 6 months and have a life span of 4 to 6 weeks. (45,000x101.6x106x6x452≈1.3x10^12)
    `
  },
}
