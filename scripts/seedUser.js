const mongoose = require('mongoose');
const db = require('../models');

// This file deletes the existing users and creates new ones

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/CDCDB', { useNewUrlParser: true }
);

const seedUsers = [
  {
    email: "jenine.ellis@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Jenine",
    lastName: "Ellis"
  },
  {
    email: "matthew.heimark@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Matthew",
    lastName: "Heimark"
  },
  {
    email: "mkskoly@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Marta",
    lastName: "Skoly"
  },
  {
    email: "madeleinekemeny@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Madeleine",
    lastName: "Kemeny"
  },
  {
    email: "info@1000Stories.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "1000 Stories",
    accountNumber: "21821"
  },
  {
    email: "info@Apothic.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Apothic",
    accountNumber: "19134"
  },
  {
    email: "info@BaronHerzog.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Baron Herzog",
    accountNumber: "159"
  },
  {
    email: "info@Bonterra.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bonterra",
    accountNumber: "107"
  },
  {
    email: "info@Cashmere.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cashmere",
    accountNumber: "46171"
  },
  {
    email: "info@Cline.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cline",
    accountNumber: "407"
  },
  {
    email: "info@Desparada.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Desparada",
    accountNumber: "22145"
  },
  {
    email: "info@EdnaValleyVineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Edna Valley Vineyard",
    accountNumber: "85"
  },
  {
    email: "info@Flowers.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Flowers",
    accountNumber: "3531"
  },
  {
    email: "info@GnekowFamilyWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gnekow Family Winery",
    accountNumber: "20699"
  },
  {
    email: "info@HartfordCourt.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hartford Court",
    accountNumber: "2801"
  },
  {
    email: "info@JVineyards&Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "J Vineyards & Winery",
    accountNumber: "1914"
  },
  {
    email: "info@KapcsandyFamilyWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Kapcsandy Family Winery",
    accountNumber: "19505"
  },
  {
    email: "info@LeP'titPaysan.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Le P'tit Paysan",
    accountNumber: "19949"
  },
  {
    email: "info@Lucinda&Millie.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lucinda & Millie",
    accountNumber: "19245"
  },
  {
    email: "info@Meiomi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Meiomi",
    accountNumber: "20092"
  },
  {
    email: "info@OpusOne.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Opus One",
    accountNumber: "2100"
  },
  {
    email: "info@PepperwoodGrove.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Pepperwood Grove",
    accountNumber: "3012"
  },
  {
    email: "info@RaymondVineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Raymond Vineyard",
    accountNumber: "619"
  },
  {
    email: "info@RutherfordRanch.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rutherford Ranch",
    accountNumber: "2106"
  },
  {
    email: "info@SeaGlass.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "SeaGlass",
    accountNumber: "20036"
  },
  {
    email: "info@SobonEstateWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sobon Estate Winery",
    accountNumber: "1096"
  },
  {
    email: "info@TalleyVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Talley Vineyards",
    accountNumber: "1098"
  },
  {
    email: "info@Troublemaker.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Troublemaker",
    accountNumber: "20028"
  },
  {
    email: "info@WenteVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Wente Vineyards",
    accountNumber: "1387"
  },
  {
    email: "info@AbyAcacia.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "A by Acacia",
    accountNumber: "17218"
  },
  {
    email: "info@AprioriCellar.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Apriori Cellar",
    accountNumber: "21811"
  },
  {
    email: "info@BarrymorebyCarmelRoad.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Barrymore by Carmel Road",
    accountNumber: "19411"
  },
  {
    email: "info@Breathless.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Breathless",
    accountNumber: "22469"
  },
  {
    email: "info@Caymus.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Caymus",
    accountNumber: "14"
  },
  {
    email: "info@Conundrum.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Conundrum",
    accountNumber: "6244"
  },
  {
    email: "info@DiBruno.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Di Bruno",
    accountNumber: "20559"
  },
  {
    email: "info@ElizabethRose.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Elizabeth Rose",
    accountNumber: "20630"
  },
  {
    email: "info@FlyingGoatCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Flying Goat Cellars",
    accountNumber: "21134"
  },
  {
    email: "info@Goldeneye.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Goldeneye",
    accountNumber: "3787"
  },
  {
    email: "info@HearstRanch.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hearst Ranch",
    accountNumber: "21172"
  },
  {
    email: "info@J.LohrVineyards&amp;Wines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "J. Lohr Vineyards &amp; Wines",
    accountNumber: "630"
  },
  {
    email: "info@Kendall-Jackson.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Kendall-Jackson",
    accountNumber: "409"
  },
  {
    email: "info@Ledge.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ledge",
    accountNumber: "21031"
  },
  {
    email: "info@MacRostie.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "MacRostie",
    accountNumber: "534"
  },
  {
    email: "info@MiraWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Mira Winery",
    accountNumber: "20235"
  },
  {
    email: "info@OrinSwiftCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Orin Swift Cellars",
    accountNumber: "19825"
  },
  {
    email: "info@PhilipTogni.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Philip Togni",
    accountNumber: "6888"
  },
  {
    email: "info@RedCarWineCompany.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Red Car Wine Company",
    accountNumber: "18682"
  },
  {
    email: "info@Saintsbury.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Saintsbury",
    accountNumber: "535"
  },
  {
    email: "info@SeanMinor.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sean Minor",
    accountNumber: "18908"
  },
  {
    email: "info@Sonoma-CutrerVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sonoma-Cutrer Vineyards",
    accountNumber: "34"
  },
  {
    email: "info@Tangent.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Tangent",
    accountNumber: "18462"
  },
  {
    email: "info@TruchardEstate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Truchard Estate",
    accountNumber: "39"
  },
  {
    email: "info@ZDWines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "ZD Wines",
    accountNumber: "384"
  },
  {
    email: "info@AERENAbyBlackbirdVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "AERENA by Blackbird Vineyards",
    accountNumber: "42334"
  },
  {
    email: "info@Arietta.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Arietta",
    accountNumber: "7083"
  },
  {
    email: "info@BeaulieuVineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Beaulieu Vineyard",
    accountNumber: "10"
  },
  {
    email: "info@Ca'Momi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ca'Momi",
    accountNumber: "21659"
  },
  {
    email: "info@Cellars33.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cellars 33",
    accountNumber: "45373"
  },
  {
    email: "info@CrossbarnbyPaulHobbs.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Crossbarn by Paul Hobbs",
    accountNumber: "19126"
  },
  {
    email: "info@diatom.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "diatom",
    accountNumber: "23315"
  },
  {
    email: "info@Elke.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Elke",
    accountNumber: "4224"
  },
  {
    email: "info@FoleyJohnson.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Foley Johnson",
    accountNumber: "20696"
  },
  {
    email: "info@GrgichHillsEstate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Grgich Hills Estate",
    accountNumber: "118"
  },
  {
    email: "info@HeitzCellar.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Heitz Cellar",
    accountNumber: "23"
  },
  {
    email: "info@JaMCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "JaM Cellars",
    accountNumber: "19194"
  },
  {
    email: "info@Kenwood.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Kenwood",
    accountNumber: "27"
  },
  {
    email: "info@LichenEstate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lichen Estate",
    accountNumber: "20542"
  },
  {
    email: "info@Margerum.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Margerum",
    accountNumber: "18695"
  },
  {
    email: "info@MorganWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Morgan Winery",
    accountNumber: "394"
  },
  {
    email: "info@OZV.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "OZV",
    accountNumber: "20110"
  },
  {
    email: "info@PiperSonoma.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Piper Sonoma",
    accountNumber: "513"
  },
  {
    email: "info@Riverbench.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Riverbench",
    accountNumber: "21688"
  },
  {
    email: "info@SanfordWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sanford Winery",
    accountNumber: "31"
  },
  {
    email: "info@Sebastiani.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sebastiani",
    accountNumber: "87"
  },
  {
    email: "info@Spellbound.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Spellbound",
    accountNumber: "17792"
  },
  {
    email: "info@Terrad'Oro.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Terra d'Oro",
    accountNumber: "18586"
  },
  {
    email: "info@TuckBeckstoffer.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Tuck Beckstoffer",
    accountNumber: "19581"
  },
  {
    email: "info@Vigilance.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Vigilance",
    accountNumber: "20477"
  },
  {
    email: "info@AlexanderValleyVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Alexander Valley Vineyards",
    accountNumber: "342"
  },
  {
    email: "info@ArtesaVineyardsandWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Artesa Vineyards and Winery",
    accountNumber: "1839"
  },
  {
    email: "info@BedrockWineCompany.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bedrock Wine Company",
    accountNumber: "18995"
  },
  {
    email: "info@CADEEstate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "CADE Estate",
    accountNumber: "19253"
  },
  {
    email: "info@ChalkHillWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chalk Hill Winery",
    accountNumber: "16"
  },
  {
    email: "info@CupcakeVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cupcake Vineyards",
    accountNumber: "18417"
  },
  {
    email: "info@DomaineCarneros.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Domaine Carneros",
    accountNumber: "45"
  },
  {
    email: "info@Emmolo.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Emmolo",
    accountNumber: "4697"
  },
  {
    email: "info@FrancisFordCoppolaWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Francis Ford Coppola Winery",
    accountNumber: "2879"
  },
  {
    email: "info@GrothVineyards&Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Groth Vineyards & Winery",
    accountNumber: "22"
  },
  {
    email: "info@Hendry.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hendry",
    accountNumber: "3207"
  },
  {
    email: "info@JFJWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "JFJ Winery",
    accountNumber: "20756"
  },
  {
    email: "info@KlinkerBrick.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Klinker Brick",
    accountNumber: "18699"
  },
  {
    email: "info@LieuDit.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lieu Dit",
    accountNumber: "20472"
  },
  {
    email: "info@Marietta.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Marietta",
    accountNumber: "88"
  },
  {
    email: "info@MummNapa.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Mumm Napa",
    accountNumber: "43"
  },
  {
    email: "info@Pahlmeyer.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Pahlmeyer",
    accountNumber: "3636"
  },
  {
    email: "info@PlumpJackWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "PlumpJack Winery",
    accountNumber: "3799"
  },
  {
    email: "info@RobertMondavi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Robert Mondavi",
    accountNumber: "30"
  },
  {
    email: "info@SansLiege.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sans Liege",
    accountNumber: "17678"
  },
  {
    email: "info@SeghesioFamilyVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Seghesio Family Vineyards",
    accountNumber: "481"
  },
  {
    email: "info@St.SuperyEstateVineyard&Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "St. Supery Estate Vineyard & Winery",
    accountNumber: "480"
  },
  {
    email: "info@TheDreamingTree.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "The Dreaming Tree",
    accountNumber: "19318"
  },
  {
    email: "info@Turnbull.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Turnbull",
    accountNumber: "188"
  },
  {
    email: "info@VinaRobles.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Vina Robles",
    accountNumber: "17808"
  },
  {
    email: "info@AlexandrieCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Alexandrie Cellars",
    accountNumber: "46185"
  },
  {
    email: "info@Aubert.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Aubert",
    accountNumber: "17883"
  },
  {
    email: "info@BelleGlos.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Belle Glos",
    accountNumber: "6147"
  },
  {
    email: "info@CakebreadCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cakebread Cellars",
    accountNumber: "13"
  },
  {
    email: "info@ChandonCalifornia.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chandon California",
    accountNumber: "44"
  },
  {
    email: "info@Curran.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Curran",
    accountNumber: "18370"
  },
  {
    email: "info@DomaineLaurier.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Domaine Laurier",
    accountNumber: "2932"
  },
  {
    email: "info@EnTirage.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "En Tirage",
    accountNumber: "42176"
  },
  {
    email: "info@FrankFamilyVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Frank Family Vineyards",
    accountNumber: "6887"
  },
  {
    email: "info@GundlachBundschu.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gundlach Bundschu",
    accountNumber: "466"
  },
  {
    email: "info@HonigVineyard&Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Honig Vineyard & Winery",
    accountNumber: "78"
  },
  {
    email: "info@JNSQ.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "JNSQ",
    accountNumber: "45259"
  },
  {
    email: "info@Korbel.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Korbel",
    accountNumber: "333"
  },
  {
    email: "info@Lloyd.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lloyd",
    accountNumber: "20748"
  },
  {
    email: "info@MartinRay.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Martin Ray",
    accountNumber: "89"
  },
  {
    email: "info@NewtonVineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Newton Vineyard",
    accountNumber: "61"
  },
  {
    email: "info@Paraduxx.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Paraduxx",
    accountNumber: "6007"
  },
  {
    email: "info@Pomelo.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Pomelo",
    accountNumber: "17828"
  },
  {
    email: "info@RobertSinskeyVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Robert Sinskey Vineyards",
    accountNumber: "2232"
  },
  {
    email: "info@ScatteredPeaks.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scattered Peaks",
    accountNumber: "42178"
  },
  {
    email: "info@SequoiaGroveVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sequoia Grove Vineyards",
    accountNumber: "32"
  },
  {
    email: "info@Stag'sLeapWineCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stag's Leap Wine Cellars",
    accountNumber: "623"
  },
  {
    email: "info@TheFableist.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "The Fableist",
    accountNumber: "25440"
  },
  {
    email: "info@TurtleRockVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Turtle Rock Vineyards",
    accountNumber: "21292"
  },
  {
    email: "info@Wayfarer.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Wayfarer",
    accountNumber: "20454"
  },
  {
    email: "info@Allure.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Allure",
    accountNumber: "19343"
  },
  {
    email: "info@AustinHope.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Austin Hope",
    accountNumber: "18323"
  },
  {
    email: "info@BenzigerFamilyWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Benziger Family Winery",
    accountNumber: "11"
  },
  {
    email: "info@Calera.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Calera",
    accountNumber: "371"
  },
  {
    email: "info@ChappelletWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chappellet Winery",
    accountNumber: "172"
  },
  {
    email: "info@DAOUVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "DAOU Vineyards",
    accountNumber: "19549"
  },
  {
    email: "info@DominusEstate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dominus Estate",
    accountNumber: "1792"
  },
  {
    email: "info@Etude.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Etude",
    accountNumber: "3786"
  },
  {
    email: "info@Frog'sLeap.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Frog's Leap",
    accountNumber: "21"
  },
  {
    email: "info@Hagafen.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hagafen",
    accountNumber: "1081"
  },
  {
    email: "info@IdlewildWines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Idlewild Wines",
    accountNumber: "21020"
  },
  {
    email: "info@JoelGott.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Joel Gott",
    accountNumber: "17974"
  },
  {
    email: "info@LaCrema.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "La Crema",
    accountNumber: "410"
  },
  {
    email: "info@LOLAWines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "LOLA Wines",
    accountNumber: "24032"
  },
  {
    email: "info@MatanzasCreekWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Matanzas Creek Winery",
    accountNumber: "471"
  },
  {
    email: "info@Nickel&Nickel.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Nickel & Nickel",
    accountNumber: "4011"
  },
  {
    email: "info@Parducci.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Parducci",
    accountNumber: "1682"
  },
  {
    email: "info@QuiviraVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Quivira Vineyards",
    accountNumber: "476"
  },
  {
    email: "info@RodneyStrongVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rodney Strong Vineyards",
    accountNumber: "52"
  },
  {
    email: "info@Scharffenberger.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scharffenberger",
    accountNumber: "17261"
  },
  {
    email: "info@ShaferVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Shafer Vineyards",
    accountNumber: "482"
  },
  {
    email: "info@Stags'LeapWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stags' Leap Winery",
    accountNumber: "57"
  },
  {
    email: "info@ThePrisonerWineCompany.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "The Prisoner Wine Company",
    accountNumber: "18681"
  },
  {
    email: "info@VaughnDuffy.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Vaughn Duffy",
    accountNumber: "21109"
  },
  {
    email: "info@AlphaOmega.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Alpha Omega",
    accountNumber: "20252"
  },
  {
    email: "info@AVAGrace.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "AVA Grace",
    accountNumber: "41888"
  },
  {
    email: "info@BeringerVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Beringer Vineyards",
    accountNumber: "51"
  },
  {
    email: "info@CambriaWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cambria Winery",
    accountNumber: "516"
  },
  {
    email: "info@ChateauMontelena.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chateau Montelena",
    accountNumber: "2149"
  },
  {
    email: "info@DarkHorse.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dark Horse",
    accountNumber: "20875"
  },
  {
    email: "info@DuckhornVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Duckhorn Vineyards",
    accountNumber: "19"
  },
  {
    email: "info@Failla.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Failla",
    accountNumber: "19191"
  },
  {
    email: "info@GambleFamilyVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gamble Family Vineyards",
    accountNumber: "20265"
  },
  {
    email: "info@HahnWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hahn Winery",
    accountNumber: "2447"
  },
  {
    email: "info@IlluminationWine.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Illumination Wine",
    accountNumber: "20591"
  },
  {
    email: "info@JordanVineyard&Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Jordan Vineyard & Winery",
    accountNumber: "469"
  },
  {
    email: "info@LagunaWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Laguna Winery",
    accountNumber: "18987"
  },
  {
    email: "info@LongMeadowRanch.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Long Meadow Ranch",
    accountNumber: "3124"
  },
  {
    email: "info@Matchbook.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Matchbook",
    accountNumber: "18000"
  },
  {
    email: "info@NobleVines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Noble Vines ",
    accountNumber: "20513"
  },
  {
    email: "info@Patz&Hall.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Patz & Hall",
    accountNumber: "4315"
  },
  {
    email: "info@Rabble.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rabble",
    accountNumber: "20478"
  },
  {
    email: "info@RoedererEstate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Roederer Estate",
    accountNumber: "997"
  },
  {
    email: "info@ScholiumProject.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scholium Project",
    accountNumber: "19195"
  },
  {
    email: "info@ShannonRidge.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Shannon Ridge",
    accountNumber: "18015"
  },
  {
    email: "info@StolpmanVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stolpman Vineyards",
    accountNumber: "17669"
  },
  {
    email: "info@TheWithers.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "The Withers",
    accountNumber: "25430"
  },
  {
    email: "info@Verdad.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Verdad",
    accountNumber: "19262"
  },
  {
    email: "info@AndrewMurrayVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Andrew Murray Vineyards",
    accountNumber: "395"
  },
  {
    email: "info@Baileyana.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Baileyana",
    accountNumber: "2221"
  },
  {
    email: "info@BlackbirdVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Blackbird Vineyards",
    accountNumber: "18359"
  },
  {
    email: "info@Cannonball.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cannonball",
    accountNumber: "20209"
  },
  {
    email: "info@ChateauSt.Jean.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chateau St. Jean",
    accountNumber: "15"
  },
  {
    email: "info@DasheCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dashe Cellars",
    accountNumber: "1799"
  },
  {
    email: "info@DunnVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dunn Vineyards",
    accountNumber: "110"
  },
  {
    email: "info@FarNiente.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Far Niente",
    accountNumber: "615"
  },
  {
    email: "info@GaryFarrell.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gary Farrell",
    accountNumber: "4451"
  },
  {
    email: "info@Hall.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hall",
    accountNumber: "17918"
  },
  {
    email: "info@InmanFamily.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Inman Family",
    accountNumber: "19012"
  },
  {
    email: "info@JosephPhelpsVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Joseph Phelps Vineyards",
    accountNumber: "25"
  },
  {
    email: "info@LailVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lail Vineyards",
    accountNumber: "4809"
  },
  {
    email: "info@Longboard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Longboard",
    accountNumber: "18337"
  },
  {
    email: "info@Matthiasson.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Matthiasson",
    accountNumber: "18595"
  },
  {
    email: "info@O'Shaughnessy.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "O'Shaughnessy",
    accountNumber: "18366"
  },
  {
    email: "info@PaulDolanVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Paul Dolan Vineyards",
    accountNumber: "18886"
  },
  {
    email: "info@Rack&Riddle.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rack & Riddle",
    accountNumber: "20707"
  },
  {
    email: "info@RombauerVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rombauer Vineyards",
    accountNumber: "90"
  },
  {
    email: "info@SchramsbergVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Schramsberg Vineyards",
    accountNumber: "636"
  },
  {
    email: "info@SilverOakAlexanderValley.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Silver Oak Alexander Valley",
    accountNumber: "19143"
  },
  {
    email: "info@Stonestreet.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stonestreet",
    accountNumber: "411"
  },
  {
    email: "info@ThreeSticks.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Three Sticks",
    accountNumber: "19513"
  },
  {
    email: "info@AngelenoWineCo.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Angeleno Wine Co",
    accountNumber: "44690"
  },
  {
    email: "info@BallettoWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Balletto Winery",
    accountNumber: "20178"
  },
  {
    email: "info@BlancdeBleu.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Blanc de Bleu",
    accountNumber: "20926"
  },
  {
    email: "info@CaraccioliCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Caraccioli Cellars",
    accountNumber: "20395"
  },
  {
    email: "info@Chloe.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chloe",
    accountNumber: "21315"
  },
  {
    email: "info@Decoy.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Decoy",
    accountNumber: "18221"
  },
  {
    email: "info@EberleWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Eberle Winery",
    accountNumber: "2224"
  },
  {
    email: "info@Faust.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Faust",
    accountNumber: "17956"
  },
  {
    email: "info@Gehricke.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gehricke",
    accountNumber: "21217"
  },
  {
    email: "info@HannaWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hanna Winery",
    accountNumber: "1896"
  },
  {
    email: "info@IronHorse.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Iron Horse",
    accountNumber: "468"
  },
  {
    email: "info@JoshCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Josh Cellars",
    accountNumber: "19260"
  },
  {
    email: "info@LangeTwins.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "LangeTwins",
    accountNumber: "19344"
  },
  {
    email: "info@LouisPommery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Louis Pommery",
    accountNumber: "42169"
  },
  {
    email: "info@Mayacamas.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Mayacamas",
    accountNumber: "1239"
  },
  {
    email: "info@OdetteEstate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Odette Estate",
    accountNumber: "21718"
  },
  {
    email: "info@PaulHobbs.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Paul Hobbs",
    accountNumber: "387"
  },
  {
    email: "info@Raeburn.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Raeburn",
    accountNumber: "20667"
  },
  {
    email: "info@RootsRunDeep.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Roots Run Deep",
    accountNumber: "18698"
  },
  {
    email: "info@ScreamingEagle.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Screaming Eagle",
    accountNumber: "3802"
  },
  {
    email: "info@SilverOakNapaValley.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Silver Oak Napa Valley",
    accountNumber: "3522"
  },
  {
    email: "info@TablasCreekVineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Tablas Creek Vineyard",
    accountNumber: "2157"
  },
  {
    email: "info@ToadHollow.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Toad Hollow",
    accountNumber: "1250"
  },
  {
    email: "info@Angels&Cowboys.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Angels & Cowboys",
    accountNumber: "20692"
  },
  {
    email: "info@BandofVintners.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Band of Vintners",
    accountNumber: "42194"
  },
  {
    email: "info@BonnyDoon.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bonny Doon",
    accountNumber: "629"
  },
  {
    email: "info@CarolShelton.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Carol Shelton",
    accountNumber: "7098"
  },
  {
    email: "info@ChronicCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chronic Cellars",
    accountNumber: "21310"
  },
  {
    email: "info@DeLoachVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "DeLoach Vineyards",
    accountNumber: "463"
  },
  {
    email: "info@EdmundsSt.John.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Edmunds St. John",
    accountNumber: "416"
  },
  {
    email: "info@Ferrari-Carano.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ferrari-Carano",
    accountNumber: "408"
  },
  {
    email: "info@GloriaFerrerCaves&Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gloria Ferrer Caves & Vineyards",
    accountNumber: "42"
  },
  {
    email: "info@HanzellVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hanzell Vineyards",
    accountNumber: "1247"
  },
  {
    email: "info@IsabelMondavi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Isabel Mondavi",
    accountNumber: "17793"
  },
  {
    email: "info@Justin.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Justin",
    accountNumber: "488"
  },
  {
    email: "info@LayerCake.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Layer Cake",
    accountNumber: "18483"
  },
  {
    email: "info@Lucas&LewellenVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lucas & Lewellen Vineyards",
    accountNumber: "22255"
  },
  {
    email: "info@McIntyreVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "McIntyre Vineyards",
    accountNumber: "19242"
  },
  {
    email: "info@ONEHOPE.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "ONEHOPE",
    accountNumber: "19293"
  },
  {
    email: "info@PejuProvince.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Peju Province",
    accountNumber: "4732"
  },
  {
    email: "info@Ramey.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ramey",
    accountNumber: "18292"
  },
  {
    email: "info@RosenblumCellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rosenblum Cellars",
    accountNumber: "91"
  },
  {
    email: "info@Scribe.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scribe",
    accountNumber: "21025"
  },
  {
    email: "info@SimpleLife.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Simple Life",
    accountNumber: "20919"
  },
  {
    email: "info@Talbott.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Talbott",
    accountNumber: "123"
  },
  {
    email: "info@TrefethenVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Trefethen Vineyards",
    accountNumber: "38"
  }



























































































































































































































































































































































































































































































































































































































































































































































































  ,
  {
    email: "brooke.dunn@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "Brock",
    lastName: "Dunn",
    address1: "284 small st",
    city: "Happyland",
    state: "Arkansas",
    zipCode: "57429"
  },
  {
    email: "bernd.kempe@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "bernd",
    lastName: "kempe",
    address1: "poststra√üe 154",
    city: "Springfield",
    state: "Arkansas",
    zipCode: "57428"
  },
  {
    email: "yasemin.krug@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "yasemin",
    lastName: "krug",
    address1: "birkenstra√üe 188",
    city: "Do Stop",
    state: "Arkansas",
    zipCode: "28574"
  },
  {
    email: "alexis.park@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "alexis",
    lastName: "park",
    address1: "3529 tecumseh rd",
    city: "Sweet Lips",
    state: "Arkansas",
    zipCode: "29250"
  },
  {
    email: "abigail.li@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "abigail",
    lastName: "li",
    address1: "6016 grand ave",
    city: "Fairbanks",
    state: "California",
    zipCode: "28750"
  },
  {
    email: "alvaro.herrera@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "alvaro",
    lastName: "herrera",
    address1: "6998 calle del barquillo",
    city: "Sandwich",
    state: "California",
    zipCode: "28575"
  },
  {
    email: "ana.leclercq@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "ana",
    lastName: "leclercq",
    address1: "4121 rue baraban",
    city: "Fame",
    state: "California",
    zipCode: "28572"
  },
  {
    email: "aslan.vanneerven@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "aslan",
    lastName: "van neerven",
    address1: "3500 sterrenburg",
    city: "Toad Suck",
    state: "California",
    zipCode: "85742"
  },
  {
    email: "chloe.taylor@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "chloe",
    lastName: "taylor",
    address1: "8798 totara avenue",
    city: "Herculaneum",
    state: "California",
    zipCode: "57428"
  },
  {
    email: "cornelius.apeland@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "cornelius",
    lastName: "apeland",
    address1: "2737 main st",
    city: "Why",
    state: "California",
    zipCode: "28574"
  },
  {
    email: "evelyn.sanchez@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "evelyn",
    lastName: "sanchez",
    address1: "1687 james st",
    city: "Pie Town",
    state: "California",
    zipCode: "27257"
  },
  {
    email: "francisco.flores@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "francisco",
    lastName: "flores",
    address1: "7847 paseo de zorrilla",
    city: "Brilliant",
    state: "California",
    zipCode: "74285"
  },
  {
    email: "hieronymus.cecilia@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "hieronymus",
    lastName: "cecilia",
    address1: "679 tolsteegbrug",
    city: "Husband",
    state: "California",
    zipCode: "49452"
  },
  {
    email: "julius.rikstad@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "julius",
    lastName: "rikstad",
    address1: "34 standgaards gate 6982",
    city: "The Bottle",
    state: "California",
    zipCode: "50241"
  },
  {
    email: "mia.li@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "mia",
    lastName: "li",
    address1: "7481 madras street",
    city: "Toad Suck",
    state: "California",
    zipCode: "51031"
  },
  {
    email: "minea.wirtanen@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "minea",
    lastName: "wirtanen",
    address1: "3961 itsen√§isyydenkatu",
    city: "Why",
    state: "California",
    zipCode: "51820"
  },
  {
    email: "miro.pulli@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "miro",
    lastName: "pulli",
    address1: "4244 reijolankatu",
    city: "Husband",
    state: "California",
    zipCode: "52609"
  },
  {
    email: "nanna.hansen@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "nanna",
    lastName: "hansen",
    address1: "5989 nibevej",
    city: "Lonelyville",
    state: "California",
    zipCode: "53398"
  },
  {
    email: "sebastian.peta@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "sebastian",
    lastName: "pe√±a",
    address1: "6037 calle del pez",
    city: "Happyland",
    state: "California",
    zipCode: "54188"
  },
  {
    email: "wanda.jimenez@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "wanda",
    lastName: "jimenez",
    address1: "870 westheimer rd",
    city: "Sanibel Island",
    state: "California",
    zipCode: "55766"
  },
  {
    email: "zuzanna.lu@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "zuzanna",
    lastName: "lu",
    address1: "soleglad 1513",
    city: "Do Stop",
    state: "California",
    zipCode: "56556"
  },
  {
    email: "maia.green@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "maia",
    lastName: "green",
    address1: "9622 lambie drive",
    city: "Piggott",
    state: "Florida",
    zipCode: "57345"
  },
  {
    email: "daniela.lorenzo@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "daniela",
    lastName: "lorenzo",
    address1: "7989 calle de Angel Garcia",
    city: "Boring",
    state: "Florida",
    zipCode: "581343"
  },
  {
    email: "livia.boyer@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "brooke",
    lastName: "dunn",
    address1: "8757 brick kiln road",
    city: "Disco",
    state: "Florida",
    zipCode: "58924"
  },
  {
    email: "thea.poulsen@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "thea",
    lastName: "poulsen",
    address1: "1961 s funnel tree lane",
    city: "Loafers Glory",
    state: "Florida",
    zipCode: "59713"
  },
  {
    email: "rodney.ross@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "rodney",
    lastName: "ross",
    address1: "8593 o'connell avenue",
    city: "Sweet Lips",
    state: "Florida",
    zipCode: "60502"
  },
  {
    email: "jennifer.ingvaldsen@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "√ºlk√º",
    lastName: "mertoƒülu",
    address1: "8055 tunafin rd",
    city: "Cranky Corner",
    state: "Florida",
    zipCode: "61291"
  },
  {
    email: "felix.carr@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "felix",
    lastName: "carr",
    address1: "3844 george street",
    city: "Sanibel Island",
    state: "Indiana",
    zipCode: "62081"
  },
  {
    email: "dax.hus@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "dax",
    lastName: "hus",
    address1: "9826 furkabaan",
    city: "Piggott",
    state: "Indiana",
    zipCode: "62870"
  },
  {
    email: "baptiste.lacroix@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "baptiste",
    lastName: "lacroix",
    address1: "4839 avenue jean-jauary",
    city: "Boring",
    state: "Indiana",
    zipCode: "63659"
  },
  {
    email: "terje.aarflot@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "terje",
    lastName: "aarflot",
    address1: "114 halsen apt 4678",
    city: "Disco",
    state: "Indiana",
    zipCode: "64449"
  },
  {
    email: "kelly.hubert@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "kelly",
    lastName: "hubert",
    address1: "4417 avenue de la lovaration",
    city: "Loafers Glory",
    state: "Indiana",
    zipCode: "65238"
  },
  {
    email: "soham.gardner@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "soham",
    lastName: "gardner",
    address1: "906 jones road",
    city: "Cranky Corner",
    state: "Maine",
    zipCode: "66817"
  },
  {
    email: "julie.young@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "julie",
    lastName: "young",
    address1: "8626 herbert road",
    city: "Condemned Bar",
    state: "Maine",
    zipCode: "67606"
  },
  {
    email: "wendy.snyder@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "wendy",
    lastName: "snyder",
    address1: "9730 bollinger rd",
    city: "Oatmeal",
    state: "Maine",
    zipCode: "68395"
  },
  {
    email: "javier.montgomery@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "javier",
    lastName: "montgomery",
    address1: "8433 depaul dr",
    city: "Lonelyville",
    state: "Maine",
    zipCode: "69184"
  },
  {
    email: "gonca.ozansoy@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "gonca",
    lastName: "ozansoy",
    address1: "4762 Muhitler cd",
    city: "McHenry",
    state: "Maine",
    zipCode: "69974"
  },
  {
    email: "idvio.moraes@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "id√°lio",
    lastName: "moraes",
    address1: "8165 rua quinze de novembro ",
    city: "Fairbanks",
    state: "Colorado",
    zipCode: "70763"
  },
  {
    email: "frank.hopkins@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "frank",
    lastName: "hopkins",
    address1: "9433 mill road",
    city: "Sandwich",
    state: "Colorado",
    zipCode: "71552"
  },
  {
    email: "benjamin.kowalski@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "benjamin",
    lastName: "kowalski",
    address1: "7145 concession road 23",
    city: "Fame",
    state: "Colorado",
    zipCode: "72342"
  },
  {
    email: "megan.sanders@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "megan",
    lastName: "sanders",
    address1: "6870 homestead rd",
    city: "Herculaneum",
    state: "Colorado",
    zipCode: "73131"
  },
  {
    email: "maeva.sirko@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "maeva",
    lastName: "sirko",
    address1: "645 oak st",
    city: "Pie Town",
    state: "Colorado",
    zipCode: "73920"
  },
  {
    email: "seyit.vandeklundert@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "seyit",
    lastName: "van de klundert",
    address1: "5182 catharijnesingel",
    city: "Brilliant",
    state: "Colorado",
    zipCode: "74710"
  },
  {
    email: "tobias.thomsen@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "tobias",
    lastName: "thomsen",
    address1: "1583 gartnerv√¶nget",
    city: "Kucj Sjukket",
    state: "Colorado",
    zipCode: "75499"
  },
  {
    email: "tracy.hicks@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "tracy",
    lastName: "hicks",
    address1: "9481 queen street",
    city: "The Bottle",
    state: "New York",
    zipCode: "76288"
  },
  {
    email: "charlotte.wong@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "charlotte",
    lastName: "wong",
    address1: "4575 stanley way",
    city: "Handsome Eddy",
    state: "New York",
    zipCode: "77077"
  },
  {
    email: "emile.ginnish@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "emile",
    lastName: "ginnish",
    address1: "2805 parliament st",
    city: "Condemned Bar",
    state: "New York",
    zipCode: "778678"
  },
  {
    email: "nicolas.margaret@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "nicolas",
    lastName: "margaret",
    address1: "1425 oak st",
    city: "Oatmeal",
    state: "New York",
    zipCode: "78656"
  },
  {
    email: "felix.fields@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "felix",
    lastName: "fields",
    address1: "3733 o'connell avenue",
    city: "Kensealy",
    state: "oklahoma",
    zipCode: "79445"
  },
  {
    email: "fernand.sanchez@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "fernand",
    lastName: "sanchez",
    address1: "8301 rue de day",
    city: "Wegginsly",
    state: "oklahoma",
    zipCode: "80235"
  },
  {
    email: "gene.williams@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "gene",
    lastName: "williams",
    address1: "501 e little york rd",
    city: "Ardrvada",
    state: "oklahoma",
    zipCode: "81024"
  },
  {
    email: "delphine.macdonald@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "delphine",
    lastName: "macdonald",
    address1: "4813 balmoral st",
    city: "Maitland Balt",
    state: "Arizona",
    zipCode: "81813"
  },
  {
    email: "maya.liu@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "maya",
    lastName: "liu",
    address1: "696 oak st",
    city: "Vctoria",
    state: "Arizona",
    zipCode: "82603"
  },
  {
    email: "jens.skeinen@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "jens",
    lastName: "skeinen",
    address1: "solbakken all√© 4438",
    city: "Huntington",
    state: "Arizona",
    zipCode: "83392"
  },
  {
    email: "sofia.hughes@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "sofia",
    lastName: "hughes",
    address1: "2368 karangahape road",
    city: "Lower Hutt",
    state: "Arizona",
    zipCode: "84181"
  },
  {
    email: "konsta.lammi@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "konsta",
    lastName: "lammi",
    address1: "7665 visiokatu",
    city: "Southside",
    state: "Arizona",
    zipCode: "84970"
  },
  {
    email: "cristofe.dacosta@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "cristofe",
    lastName: "da costa",
    address1: "6499 rua jos√© bonif√°cio ",
    city: "Salvador",
    state: "Missouri",
    zipCode: "85760"
  },
  {
    email: "rose.mitchell@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "rose",
    lastName: "mitchell",
    address1: "5571 20th ave",
    city: "South River",
    state: "Georgia",
    zipCode: "86549"
  },
  {
    email: "byron.ferguson@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "byron",
    lastName: "ferguson",
    address1: "32 hickory creek dr",
    city: "Jacksonville",
    state: "Georgia",
    zipCode: "87338"
  },
  {
    email: "Viviancarvalho@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "Vivian",
    lastName: "carvalho",
    address1: "9624 rua da paz ",
    city: "Joy",
    state: "Georgia",
    zipCode: "88128"
  },
  {
    email: "jasmina.steidle@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "jasmina",
    lastName: "steidle",
    address1: "birkenweg 60",
    city: "Stralsund",
    state: "Georgia",
    zipCode: "88917"
  },
  {
    email: "ulrich.rose@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "ulrich",
    lastName: "rose",
    address1: "mittelweg 155",
    city: "Geneva",
    state: "Georgia",
    zipCode: "89706"
  },
  {
    email: "ninon.legrand@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "ninon",
    lastName: "legrand",
    address1: "4975 rue docteur-bonhomme",
    city: "Point Loma",
    state: "Georgia",
    zipCode: "90496"
  },
  {
    email: "peyton.clarke@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "peyton",
    lastName: "clarke",
    address1: "4784 queen elizabeth ii drive",
    city: "Westside",
    state: "Georgia",
    zipCode: "91285"
  },
  {
    email: "matilda.cooper@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "matilda",
    lastName: "cooper",
    address1: "5175 st aubyn street",
    city: "Tartunaranga",
    state: "Alaska",
    zipCode: "92074"
  },
  {
    email: "jeff.chapman@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "jeff",
    lastName: "chapman",
    address1: "9385 sunset st",
    city: "Taralgon",
    state: "Nevada",
    zipCode: "92863"
  },
  {
    email: "scott.lawrence@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "scott",
    lastName: "lawrence",
    address1: "8089 james st",
    city: "Mackalay",
    state: "Nevada",
    zipCode: "93653"
  },
  {
    email: "valerie.phillips@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "valerie",
    lastName: "phillips",
    address1: "5101 miller ave",
    city: "Port Macquarie",
    state: "Nevada",
    zipCode: "94444"
  },
  {
    email: "freya.skoge@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "freya",
    lastName: "skoge",
    address1: "345 Rektorhaugen apt 7468",
    city: "Krossen",
    state: "Nevada",
    zipCode: "95231"
  },
  {
    email: "albert.poulsen@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "albert",
    lastName: "poulsen",
    address1: "5556 Nugent",
    city: "Funton",
    state: "Washington",
    zipCode: "96021"
  },
  {
    email: "clayton.turner@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "clayton",
    lastName: "turner",
    address1: "865 north road",
    city: "Durham",
    state: "Washington",
    zipCode: "96810"
  },
  {
    email: "deniz.karada≈ü@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "deniz",
    lastName: "karada",
    address1: "7935 Otter Rd",
    city: "Folsom",
    state: "Washington",
    zipCode: "97599"
  },
  {
    email: "eckhart.kellermann@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "eckhart",
    lastName: "kellermann",
    address1: "bahnhofstra√üe 9",
    city: "Blaustein",
    state: "Washington",
    zipCode: "98389"
  },
  {
    email: "elio.faure@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "elio",
    lastName: "faure",
    address1: "1160 rue da road",
    city: "Toulouse",
    state: "Washington",
    zipCode: "99178"
  },
  {
    email: "karl-werner.zipfel@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "Karl-werner",
    lastName: "Zipfel",
    address1: "4587 tannenweg suite 58",
    city: "Schrobenhausen",
    state: "Washington",
    zipCode: "99967"
  },
  {
    email: "thomas.hardcourt@example.com",
    password: "Test1235",
    userType: "User",
    firstName: "thomas",
    lastName: "harcourt",
    address1: "8423 Peel st",
    city: "Minto",
    state: "Wyoming",
    zipCode: "757254"
  }
];

//Adding the seed data to the DB. You need to do a node scripts/seedUser.js
db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(seedUsers))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
