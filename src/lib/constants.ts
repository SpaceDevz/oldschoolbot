import { join } from 'path';

export const enum Time {
	Millisecond = 1,
	Second = 1000,
	Minute = 1000 * 60,
	Hour = 1000 * 60 * 60,
	Day = 1000 * 60 * 60 * 24,
	Month = 1000 * 60 * 60 * 24 * 30,
	Year = 1000 * 60 * 60 * 24 * 365
}

export const enum Channel {
	Notifications = '469523207691436042',
	ErrorLogs = '665678499578904596',
	Suggestions = '668441710703149074',
	GrandExchange = '682996313209831435',
	Developers = '648196527294251020',
	BlacklistLogs = '782459317218967602'
}

export const enum Roles {
	Booster = '665908237152813057',
	Contributor = '456181501437018112',
	Moderator = '622806157563527178',
	PatronTier1 = '678970545789730826',
	PatronTier2 = '678967943979204608',
	PatronTier3 = '687408140832342043',
	Patron = '679620175838183424',
	// Status Roles
	TopSkiller = '795266465329709076',
	TopCollector = '795271210141351947',
	TopSacrificer = '795933981715464192'
}

export const enum Emoji {
	MoneyBag = '<:MoneyBag:493286312854683654>',
	OSBot = '<:OSBot:601768469905801226>',
	Joy = '😂',
	Bpaptu = '<:bpaptu:660333438292983818>',
	Diamond = '💎',
	Dice = '<:dice:660128887111548957>',
	Fireworks = '🎆',
	Tick = '✅',
	RedX = '❌',
	Search = '🔎',
	FancyLoveheart = '💝',
	Gift = '🎁',
	Sad = '<:RSSad:380915244652036097>',
	Happy = '<:RSHappy:380915244760825857>',
	PeepoOSBot = '<:peepoOSBot:601695641088950282>',
	PeepoSlayer = '<:peepoSlayer:644411576425775104>',
	PeepoRanger = '<:peepoRanger:663096705746731089>',
	PeepoNoob = '<:peepoNoob:660712001500086282>',
	XP = '<:xp:630911040510623745>',
	GP = '<:RSGP:369349580040437770>',
	ThumbsUp = '👍',
	ThumbsDown = '👎',
	Casket = '<:Casket:365003978678730772>',
	Agility = '<:agility:630911040355565568>',
	Cooking = '<:cooking:630911040426868756>',
	Fishing = '<:fishing:630911040091193356>',
	Mining = '<:mining:630911040128811010>',
	Smithing = '<:smithing:630911040452034590>',
	Woodcutting = '<:woodcutting:630911040099450892>',
	Runecraft = '<:runecraft:630911040435257364>',
	Prayer = '<:prayer:630911040426868746>',
	Construction = '<:construction:630911040493715476>',
	Diango = '<:diangoChatHead:678146375300415508>',
	BirthdayPresent = '<:birthdayPresent:680041979710668880>',
	MysteryBox = '<:mysterybox:680783258488799277>',
	QuestIcon = '<:questIcon:690191385907036179>',
	MinigameIcon = '<:minigameIcon:630400565070921761>',
	Warning = '⚠️',
	Ironman = '<:ironman:626647335900020746>',
	Firemaking = '<:firemaking:630911040175210518>',
	Crafting = '<:crafting:630911040460161047>',
	EasterEgg = '<:easterEgg:695473553314938920>',
	Join = '<:join:705971600956194907>',
	TzRekJad = '<:Tzrekjad:324127379188613121>',
	Phoenix = '<:Phoenix:324127378223792129>',
	AnimatedFireCape = '<a:FireCape:394692985184583690>',
	Fletching = '<:fletching:630911040544309258>',
	Farming = '<:farming:630911040355565599>',
	Tangleroot = '<:tangleroot:324127378978635778>',
	Herblore = '<:herblore:630911040535658496>',
	Purple = '🟪',
	Thieving = '<:thieving:630910829352452123>',
	Ely = '<:ely:784453586033049630>',
	Timer = '<:ehpclock:352323705210142721>',
	ChristmasCracker = '<:cracker:785389969962958858>',
	SantaHat = '<:santaHat:785874868905181195>',
	RottenPotato = '<:rottenPotato:791498767051915275>',
	// Badges,
	BigOrangeGem = '<:bigOrangeGem:778418736188489770>',
	GreenGem = '<:greenGem:778418736495067166>',
	PinkGem = '<:pinkGem:778418736276963349>',
	OrangeGem = '<:orangeGem:778418736474095616>',
	Minion = '<:minion:778418736180494347>',
	Spanner = '<:spanner:778418736621158410>',
	DoubleSpanner = '<:doubleSpanner:778418736327688194>',
	Hammer = '<:hammer:778418736595206184>',
	Bug = '<:bug:778418736330833951>',
	Trophy = '<:goldTrophy:778418736561782794>',
	Crab = '<:crab:778418736432021505>'
}

export const enum ReactionEmoji {
	Join = '705971600956194907',
	Stop = '705972260950769669',
	Start = '705973302719414329'
}

export const enum Image {
	DiceBag = 'https://i.imgur.com/sySQkSX.png'
}

export const enum Color {
	Orange = 16098851
}

export const SupportServer = '342983479501389826';

export const enum Tasks {
	AgilityActivity = 'agilityActivity',
	CookingActivity = 'cookingActivity',
	MonsterActivity = 'monsterActivity',
	GroupMonsterActivity = 'groupMonsterActivity',
	ClueActivity = 'clueActivity',
	FishingActivity = 'fishingActivity',
	MiningActivity = 'miningActivity',
	SmeltingActivity = 'smeltingActivity',
	SmithingActivity = 'smithingActivity',
	WoodcuttingActivity = 'woodcuttingActivity',
	RunecraftActivity = 'runecraftActivity',
	FiremakingActivity = 'firemakingActivity',
	CraftingActivity = 'craftingActivity',
	BuryingActivity = 'buryingActivity',
	OfferingActivity = 'offeringActivity',
	FletchingActivity = 'fletchingActivity',
	FarmingActivity = 'farmingActivity',
	HerbloreActivity = 'herbloreActivity',
	ConstructionActivity = 'constructionActivity',
	QuestingActivity = 'questingActivity',
	FightCavesActivity = 'fightCavesActivity',
	WintertodtActivity = 'wintertodtActivity',
	AlchingActivity = 'alchingActivity',
	NightmareActivity = 'nightmareActivity',
	AnimatedArmourActivity = 'animatedArmourActivity',
	CyclopsActivity = 'cyclopsActivity',
	SepulchreActivity = 'sepulchreActivity',
	PlunderActivity = 'plunderActivity',
	FishingTrawler = 'trawlerActivity',
	ZalcanoActivity = 'zalcanoActivity',
	SawmillActivity = 'sawmillActivity',
	PickpocketActivity = 'pickpocketActivity',
	TitheFarmActivity = 'titheFarmActivity',
	BarbarianAssault = 'barbarianAssaultActivity',
	AgilityArena = 'agilityArenaActivity',
	ChampionsChallenge = 'championsChallengeActivity',
	MahoganyHomes = 'mahoganyHomesActivity'
}

export const enum Activity {
	Agility = 'Agility',
	Cooking = 'Cooking',
	MonsterKilling = 'MonsterKilling',
	GroupMonsterKilling = 'GroupMonsterKilling',
	ClueCompletion = 'ClueCompletion',
	Fishing = 'Fishing',
	Mining = 'Mining',
	Smithing = 'Smithing',
	Woodcutting = 'Woodcutting',
	Questing = 'Questing',
	Firemaking = 'Firemaking',
	Runecraft = 'Runecraft',
	Smelting = 'Smelting',
	Crafting = 'Crafting',
	Burying = 'Burying',
	Offering = 'Offering',
	FightCaves = 'FightCaves',
	Wintertodt = 'Wintertodt',
	TitheFarm = 'TitheFarm',
	Fletching = 'Fletching',
	Pickpocket = 'Pickpocket',
	Herblore = 'Herblore',
	Alching = 'Alching',
	AnimatedArmour = 'AnimatedArmour',
	Cyclops = 'Cyclops',
	Sawmill = 'Sawmill',
	Nightmare = 'Nightmare',
	Sepulchre = 'Sepulchre',
	Plunder = 'Plunder',
	FishingTrawler = 'FishingTrawler',
	Zalcano = 'Zalcano',
	Farming = 'Farming',
	Construction = 'Construction',
	BarbarianAssault = 'BarbarianAssault',
	AgilityArena = 'AgilityArena',
	ChampionsChallenge = 'ChampionsChallenge',
	MahoganyHomes = 'MahoganyHomes'
}

export enum ActivityGroup {
	Skilling = 'Skilling',
	Clue = 'Clue',
	Monster = 'Monster',
	Minigame = 'Minigame'
}

export const enum Events {
	Debug = 'debug',
	Error = 'error',
	Log = 'log',
	Verbose = 'verbose',
	Warn = 'warn',
	Wtf = 'wtf',
	ServerNotification = 'serverNotification',
	SkillLevelUp = 'skillLevelUp'
}

export const enum BadgesEnum {
	Developer = 0,
	Booster = 1,
	LimitedPatron = 2,
	Patron = 3
}

export const enum PermissionLevelsEnum {
	Zero = 0,
	Moderator = 6,
	Admin = 7,
	Owner = 10
}

export const rootFolder = join(__dirname, '..', '..', '..');

export const COINS_ID = 995;

export const enum PerkTier {
	/**
	 * Boosters
	 */
	One = 1,
	/**
	 * Tier 1 Patron
	 */
	Two = 2,
	/**
	 * Tier 2 Patron, Contributors, Mods
	 */
	Three = 3,
	/**
	 * Tier 3 Patron
	 */
	Four = 4,
	/**
	 * Tier 4 Patron
	 */
	Five = 5,
	/**
	 * Tier 5 Patron
	 */
	Six = 6
}

export const enum BitField {
	HasGivenBirthdayPresent = 1,
	IsPatronTier1 = 2,
	IsPatronTier2 = 3,
	IsPatronTier3 = 4,
	IsPatronTier4 = 5,
	IsPatronTier5 = 6,
	isModerator = 7,
	isContributor = 8,
	BypassAgeRestriction = 9
}

export const enum PatronTierID {
	One = '4608201',
	Two = '4608226',
	Three = '4720356',
	Four = '5262065',
	Five = '5262216'
}

export const MAX_QP = 279;

export const MIMIC_MONSTER_ID = 23184;

export const continuationChars = 'abdefghjkmnopqrstuvwxyz123456789'.split('');
export const CENA_CHARS = ['​', '‎', '‍'];
export const NIGHTMARES_HP = 2400;
export const ZAM_HASTA_CRUSH = 65;
export const MAX_INT_JAVA = 2_147_483_647;
export const TWEETS_RATELIMITING =
	`Tweets in Old School Bot can only be enabled in servers with more than 20 members, or by Tier 3 Patrons - this is due to ratelimiting issues.` +
	`You can consider checking tweets in another server, or becoming a patron. Apologies for the inconvenience.`;
