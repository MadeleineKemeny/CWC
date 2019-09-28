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
    email: "info@ZD.Wines.com",
    password: "Test1234",
    userType: "Producer",
    vineyardFullname: "ZD Wines"
  }
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
