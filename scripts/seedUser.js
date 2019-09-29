const mongoose = require('mongoose');
const db = require('../models');

// This file deletes the existing users and creates new ones

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/CDCDB', { useNewUrlParser: true }
);

const seedUser = [
  {
    email: "jenine.ellis@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Jenine",
    lastName: "Ellis",
  },
  {
    email: "matthew.heimark@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Matthew",
    lastName: "Heimark",
  },
  {
    email: "mkskoly@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Marta",
    lastName: "Skoly",
  },
  {
    email: "madeleinekemeny@gmail.com",
    password: "Test1234",
    userType: "Admin",
    firstName: "Madeleine",
    lastName: "Kemeny",
  },
  {
    email: "info@Acacia.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Acacia"
  },
  {
    email: "wholesale@bespokecollection.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Blackbird Vineyards"
  },
  {
    email: "avv@avvwine.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Alexander Valley Vineyards"
  },
  {
    email: "info@alexandriecellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Alexandrie Cellars"
  },
  {
    email: "info@alexandriecellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Alexandrie Cellars"
  },
  {
    email: "orders@cellar8wine.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Allure"
  },
  {
    email: "info@Alpha.Omega.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Alpha Omega"
  },
  {
    email: "info@Angeline.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Angeline"
  },
  {
    email: "info@Angels&Cowboys.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Angels & Cowboys"
  },
  {
    email: "info@Apriori.Cellar.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Apriori Cellar"
  },
  {
    email: "info@Arietta.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Arietta"
  },
  {
    email: "info@Armanino.Family.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Armanino Family Cellars"
  },
  {
    email: "info@Artesa.VineyardsandWinery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Artesa Vineyards and Winery"
  },
  {
    email: "info@Aubert.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Aubert"
  },
  {
    email: "info@AVA.Grace.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "AVA Grace"
  },
  {
    email: "info@Baileyana.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Baileyana"
  },
  {
    email: "info@Balletto.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Balletto Winery"
  },
  {
    email: "info@Band.of.Vintners.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Band of Vintners"
  },
  {
    email: "info@Banshee.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Banshee"
  },
  {
    email: "info@Baron.Herzog.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Baron Herzog"
  },
  {
    email: "info@Carmel.Road.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Barrymore by Carmel Road"
  },
  {
    email: "info@Beaulieu.Vineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Beaulieu Vineyard"
  },
  {
    email: "info@Bedrock.Wine.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bedrock Wine Company"
  },
  {
    email: "info@Benziger.Family.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Benziger Family Winery"
  },
  {
    email: "info@Beringer.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Beringer Vineyards"
  },
  {
    email: "info@Bernardus.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bernardus"
  },
  {
    email: "info@Blackbird.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Blackbird Vineyards"
  },
  {
    email: "info@Blanc.de.Bleu.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Blanc de Bleu"
  },
  {
    email: "info@Bogle.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bogle Vineyards"
  },
  {
    email: "info@Bonny.Doon.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bonny Doon"
  },
  {
    email: "info@Bonterra.",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bonterra"
  },
  {
    email: "info@Bread&Butter.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Bread & Butter"
  },
  {
    email: "info@Breathless.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Breathless"
  },
  {
    email: "info@Brick.Barn.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Brick Barn"
  },
  {
    email: "info@Ca'Momi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ca'Momi"
  },
  {
    email: "info@CADE.Estate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "CADE Estate"
  },
  {
    email: "info@Cakebread.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cakebread Cellars"
  },
  {
    email: "info@Calera.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Calera"
  },
  {
    email: "info@Cannonball.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cannonball"
  },
  {
    email: "info@Capture.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Capture"
  },
  {
    email: "info@Caraccioli.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Caraccioli Cellars"
  },
  {
    email: "info@Carol.Shelton.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Carol Shelton"
  },
  {
    email: "info@Cashmere.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cashmere"
  },
  {
    email: "info@Castoro.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Castoro Cellars"
  },
  {
    email: "info@Caymus.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Caymus"
  },
  {
    email: "info@Cellars.33.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cellars 33"
  },
  {
    email: "info@Chalk.Hill.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chalk Hill Winery"
  },
  {
    email: "info@Chandon.California.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chandon California"
  },
  {
    email: "info@Chappellet.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chappellet Winery"
  },
  {
    email: "info@Chateau.St.Jean.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chateau St. Jean"
  },
  {
    email: "info@Chloe.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chloe"
  },
  {
    email: "info@Chronic.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Chronic Cellars"
  },
  {
    email: "info@Cliff.Lede.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cliff Lede Vineyards"
  },
  {
    email: "info@Cline.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cline"
  },
  {
    email: "info@Conundrum.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Conundrum"
  },
  {
    email: "info@Cupcake.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Cupcake Vineyards"
  },
  {
    email: "info@Curran.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Curran"
  },
  {
    email: "info@DAOU.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "DAOU Vineyards"
  },
  {
    email: "info@Dark.Horse.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dark Horse"
  },
  {
    email: "info@Dashe.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dashe Cellars"
  },
  {
    email: "info@Decoy.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Decoy"
  },
  {
    email: "info@DeLoach.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "DeLoach Vineyards"
  },
  {
    email: "info@Domaine.Carneros.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Domaine Carneros"
  },
  {
    email: "info@Domaine.Laurier.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Domaine Laurier"
  },
  {
    email: "info@Dominus.Estate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dominus Estate"
  },
  {
    email: "info@Duckhorn.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Duckhorn Vineyards"
  },
  {
    email: "info@Dunn.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Dunn Vineyards"
  },
  {
    email: "info@Eberle.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Eberle Winery"
  },
  {
    email: "info@Edmunds.St.John.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Edmunds St. John"
  },
  {
    email: "info@Elizabeth.Rose.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Elizabeth Rose"
  },
  {
    email: "info@Elke.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Elke"
  },
  {
    email: "info@Emmolo.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Emmolo"
  },
  {
    email: "info@En.Tirage.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "En Tirage"
  },
  {
    email: "info@Etude.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Etude"
  },
  {
    email: "info@Failla.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Failla"
  },
  {
    email: "info@Far.Niente.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Far Niente"
  },
  {
    email: "info@Ferrari-Carano.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ferrari-Carano"
  },
  {
    email: "info@Flowers.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Flowers"
  },
  {
    email: "info@Flying.Goat.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Flying Goat Cellars"
  },
  {
    email: "info@Forman.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Forman"
  },
  {
    email: "info@Francis.Ford.Coppola.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Francis Ford Coppola Winery"
  },
  {
    email: "info@Frank.Family.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Frank Family Vineyards"
  },
  {
    email: "info@Freemark.Abbey.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Freemark Abbey"
  },
  {
    email: "info@Frey.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Frey"
  },
  {
    email: "info@Frog's.Leap.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Frog's Leap"
  },
  {
    email: "info@Gamble.Family.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gamble Family Vineyards"
  },
  {
    email: "info@Gehricke.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gehricke"
  },
  {
    email: "info@Geyser.Peak.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Geyser Peak"
  },
  {
    email: "info@Ghost.Block.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ghost Block"
  },
  {
    email: "info@CavesNVineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gloria Ferrer Caves & Vineyards"
  },
  {
    email: "info@Gnekow.Family.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Gnekow Family Winery"
  },
  {
    email: "info@Goldeneye.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Goldeneye"
  },
  {
    email: "info@Grgich.Hills.Estate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Grgich Hills Estate"
  },
  {
    email: "info@Hagafen.",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hagafen"
  },
  {
    email: "info@Hahn.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hahn Winery"
  },
  {
    email: "info@Hall.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hall"
  },
  {
    email: "info@Hanzell.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hanzell Vineyards"
  },
  {
    email: "info@Hartford.Court.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hartford Court"
  },
  {
    email: "info@Hearst.Ranch.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hearst Ranch"
  },
  {
    email: "info@Heitz.Cellar.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Heitz Cellar"
  },
  {
    email: "info@Hendry.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Hendry"
  },
  {
    email: "info@High.Valley.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "High Valley Vineyards"
  },
  {
    email: "info@Honig.Vineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Honig Vineyard & Winery"
  },
  {
    email: "info@Idlewild.Wines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Idlewild Wines"
  },
  {
    email: "info@Illumination.Wine.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Illumination Wine"
  },
  {
    email: "info@Inglenook.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Inglenook"
  },
  {
    email: "info@Inman.Family.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Inman Family"
  },
  {
    email: "info@Iron.Horse.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Iron Horse"
  },
  {
    email: "info@Isabel.Mondavi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Isabel Mondavi"
  },
  {
    email: "info@J.Vineyards.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "J Vineyards & Winery"
  },
  {
    email: "info@JLohrVineyards&Wines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "J. Lohr Vineyards &amp; Wines"
  },
  {
    email: "info@JaM.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "JaM Cellars"
  },
  {
    email: "info@JFJ.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "JFJ Winery"
  },
  {
    email: "info@JNSQ.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "JNSQ"
  },
  {
    email: "info@Joel.Gott.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Joel Gott"
  },
  {
    email: "info@Joseph.Phelps.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Joseph Phelps Vineyards"
  },
  {
    email: "info@Josh.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Josh Cellars"
  },
  {
    email: "info@Justin.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Justin"
  },
  {
    email: "info@Kendall-Jackson.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Kendall-Jackson"
  },
  {
    email: "info@Kenwood.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Kenwood"
  },
  {
    email: "info@Klinker.Brick.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Klinker Brick"
  },
  {
    email: "info@Korbel.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Korbel"
  },
  {
    email: "info@La.Crema.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "La Crema"
  },
  {
    email: "info@Laguna.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Laguna Winery"
  },
  {
    email: "info@Lail.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lail Vineyards"
  },
  {
    email: "info@Le.P'tit.Paysan.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Le P'tit Paysan"
  },
  {
    email: "info@Ledge.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ledge"
  },
  {
    email: "info@Leviathan.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Leviathan"
  },
  {
    email: "info@Lichen.Estate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lichen Estate"
  },
  {
    email: "info@Lieu.Dit.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lieu Dit"
  },
  {
    email: "info@Lioco.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lioco"
  },
  {
    email: "info@Liquid.Farm.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Liquid Farm"
  },
  {
    email: "info@Lloyd.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lloyd"
  },
  {
    email: "info@LOLA.Wines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "LOLA Wines"
  },
  {
    email: "info@Long.Meadow.Ranch.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Long Meadow Ranch"
  },
  {
    email: "info@Louis.Pommery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Louis Pommery"
  },
  {
    email: "info@Lucas&Lewellen.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lucas & Lewellen Vineyards"
  },
  {
    email: "info@Lucinda&Millie.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Lucinda & Millie"
  },
  {
    email: "info@MacMurray.Ranch.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "MacMurray Ranch"
  },
  {
    email: "info@MacRostie.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "MacRostie"
  },
  {
    email: "info@Malene.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Malene"
  },
  {
    email: "info@Marcassin.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Marcassin"
  },
  {
    email: "info@Margerum.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Margerum"
  },
  {
    email: "info@Marietta.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Marietta"
  },
  {
    email: "info@Martin.Ray.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Martin Ray"
  },
  {
    email: "info@Matanzas.Creek.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Matanzas Creek Winery"
  },
  {
    email: "info@Matchbook.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Matchbook"
  },
  {
    email: "info@Mayacamas.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Mayacamas"
  },
  {
    email: "info@McIntyre.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "McIntyre Vineyards"
  },
  {
    email: "info@Meiomi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Meiomi"
  },
  {
    email: "info@Morgan.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Morgan Winery"
  },
  {
    email: "info@Mount.Veeder.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Mount Veeder Winery"
  },
  {
    email: "info@Mumm.Napa.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Mumm Napa"
  },
  {
    email: "info@Newton.Vineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Newton Vineyard"
  },
  {
    email: "info@Nickel&Nickel.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Nickel & Nickel"
  },
  {
    email: "info@O'Shaughnessy.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "O'Shaughnessy"
  },
  {
    email: "info@Odette.Estate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Odette Estate"
  },
  {
    email: "info@ONEHOPE.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "ONEHOPE"
  },
  {
    email: "info@Opus.One.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Opus One"
  },
  {
    email: "info@Orin.Swift.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Orin Swift Cellars"
  },
  {
    email: "info@Oro.Bello.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Oro Bello"
  },
  {
    email: "info@OZV.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "OZV"
  },
  {
    email: "info@Pahlmeyer.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Pahlmeyer"
  },
  {
    email: "info@Paraduxx.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Paraduxx"
  },
  {
    email: "info@Parducci.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Parducci"
  },
  {
    email: "info@Patz&Hall.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Patz & Hall"
  },
  {
    email: "info@Paul.Dolan.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Paul Dolan Vineyards"
  },
  {
    email: "info@Paul.Hobbs.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Paul Hobbs"
  },
  {
    email: "info@Pedroncelli.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Pedroncelli Winery"
  },
  {
    email: "info@Pepperwood.Grove.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Pepperwood Grove"
  },
  {
    email: "info@Philip.Togni.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Philip Togni"
  },
  {
    email: "info@Piper.Sonoma.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Piper Sonoma"
  },
  {
    email: "info@PlumpJack.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "PlumpJack Winery"
  },
  {
    email: "info@Pomelo.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Pomelo"
  },
  {
    email: "info@Quilt.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Quilt"
  },
  {
    email: "info@Quivira.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Quivira Vineyards"
  },
  {
    email: "info@Rabble.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rabble"
  },
  {
    email: "info@Rack&Riddle.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rack & Riddle"
  },
  {
    email: "info@Raeburn.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Raeburn"
  },
  {
    email: "info@Ramey.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ramey"
  },
  {
    email: "info@Raymond.Vineyard.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Raymond Vineyard"
  },
  {
    email: "info@Red.Car.Wine.Company.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Red Car Wine Company"
  },
  {
    email: "info@Ridge.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Ridge"
  },
  {
    email: "info@Riverbench.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Riverbench"
  },
  {
    email: "info@Robert.Mondavi.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Robert Mondavi"
  },
  {
    email: "info@Robert.Sinskey.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Robert Sinskey Vineyards"
  },
  {
    email: "info@Rodney.Strong.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rodney Strong Vineyards"
  },
  {
    email: "info@Roederer.Estate.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Roederer Estate"
  },
  {
    email: "info@Rombauer.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rombauer Vineyards"
  },
  {
    email: "info@Roots.Run.Deep.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Roots Run Deep"
  },
  {
    email: "info@Rosenblum.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Rosenblum Cellars"
  },
  {
    email: "info@Round.Pond.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Round Pond"
  },
  {
    email: "info@Saintsbury.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Saintsbury"
  },
  {
    email: "info@Sanford.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sanford Winery"
  },
  {
    email: "info@Sans.Liege.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sans Liege"
  },
  {
    email: "info@Scattered.Peaks.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scattered Peaks"
  },
  {
    email: "info@Scharffenberger.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scharffenberger"
  },
  {
    email: "info@Scholium.Project.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scholium Project"
  },
  {
    email: "info@Schramsberg.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Schramsberg Vineyards"
  },
  {
    email: "info@Screaming.Eagle.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Screaming Eagle"
  },
  {
    email: "info@Scribe.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Scribe"
  },
  {
    email: "info@SeaGlass.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "SeaGlass"
  },
  {
    email: "info@Sean.Minor.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sean Minor"
  },
  {
    email: "info@Seghesio.Family.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Seghesio Family Vineyards"
  },
  {
    email: "info@Shafer.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Shafer Vineyards"
  },
  {
    email: "info@Silver.Oak.Alexander.Valley.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Silver Oak Alexander Valley"
  },
  {
    email: "info@Silver.Oak.Napa.Valley.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Silver Oak Napa Valley"
  },
  {
    email: "info@Simple.Life.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Simple Life"
  },
  {
    email: "info@Smoke.Tree.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Smoke Tree"
  },
  {
    email: "info@Sobon.Estate.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sobon Estate Winery"
  },
  {
    email: "info@Sonoma-Cutrer.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Sonoma-Cutrer Vineyards"
  },
  {
    email: "info@Spellbound.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Spellbound"
  },
  {
    email: "info@St.Supery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "St. Supery Estate Vineyard & Winery"
  },
  {
    email: "info@Stag's.Leap.Wine.Cellars.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stag's Leap Wine Cellars"
  },
  {
    email: "info@Stags'.Leap.Winery.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stags' Leap Winery"
  },
  {
    email: "info@Stolpman.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stolpman Vineyards"
  },
  {
    email: "info@Stonestreet.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Stonestreet"
  },
  {
    email: "info@Tablas.Creek.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Tablas Creek Vineyard"
  },
  {
    email: "info@Talbott.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Talbott"
  },
  {
    email: "info@Tenshen.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Tenshen"
  },
  {
    email: "info@The.Fableist.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "The Fableist"
  },
  {
    email: "info@Prisoner.Wine.Company.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "The Prisoner Wine Company"
  },
  {
    email: "info@Withers.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "The Withers"
  },
  {
    email: "info@Three.Sticks.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Three Sticks"
  },
  {
    email: "info@Toad.Hollow.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Toad Hollow"
  },
  {
    email: "info@Trefethen.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Trefethen Vineyards"
  },
  {
    email: "info@Troublemaker.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Troublemaker"
  },
  {
    email: "info@Tuck.Beckstoffer.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Tuck Beckstoffer"
  },
  {
    email: "info@Turnbull.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Turnbull"
  },
  {
    email: "info@Turtle.Rock.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Turtle Rock Vineyards"
  },
  {
    email: "info@Venge.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Venge Vineyards"
  },
  {
    email: "info@Verdad.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Verdad"
  },
  {
    email: "info@Vigilance.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Vigilance"
  },
  {
    email: "info@Vina.Robles.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Vina Robles"
  },
  {
    email: "info@Walter.Hansel.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Walter Hansel"
  },
  {
    email: "info@Wayfarer.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Wayfarer"
  },
  {
    email: "info@Wente.Vineyards.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "Wente Vineyards"
  },
  {
    email: "info@ZD.Wines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "ZD Wines"
  },
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
  },
];

//Adding the seed data to the DB. You need to do a node scripts/seedUser.js
const seedAPI = async () => {
  try {
    const isDelete = await db.User.remove({})
    if (isDelete) {
      seedUser.map(user => {
        db.User.create(user)
        return user;
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}
seedAPI();
