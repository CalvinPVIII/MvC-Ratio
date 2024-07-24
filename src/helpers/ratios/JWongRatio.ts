import { RatioSystem, Roster } from "../../types";
import * as Icon from "../IconImages";
import * as Hyper from "../HyperImages";
import * as Portrait from "../PortraitImages";

const characters: Roster = {
  Akuma: {
    name: "Akuma",
    icon: Icon.Akuma,
    portrait: Portrait.Akuma,
    hyper: Hyper.Akuma,
    pointCost: 1,
    characterSelectOrder: 22,
  },
  Amingo: {
    name: "Amingo",
    icon: Icon.Amingo,
    portrait: Portrait.Amingo,
    hyper: Hyper.Amingo,
    pointCost: 1,
    characterSelectOrder: 9,
  },
  Anakaris: {
    name: "Anakaris",
    icon: Icon.Anakaris,
    portrait: Portrait.Anakaris,
    hyper: Hyper.Anakaris,
    pointCost: 2,
    characterSelectOrder: 31,
  },
  BB_Hood: {
    name: "BB Hood",
    icon: Icon.BB_Hood,
    portrait: Portrait.BB_Hood,
    hyper: Hyper.B_B_Hood,
    pointCost: 2,
    characterSelectOrder: 40,
  },
  Blackheart: {
    name: "Blackheart",
    icon: Icon.Blackheart,
    portrait: Portrait.Blackheart,
    hyper: Hyper.BlackHeart,
    pointCost: 4,
    characterSelectOrder: 28,
  },
  Cable: {
    name: "Cable",
    icon: Icon.Cable,
    portrait: Portrait.Cable,
    hyper: Hyper.Cable,
    pointCost: 5,
    characterSelectOrder: 25,
  },
  Cammy: {
    name: "Cammy",
    icon: Icon.Cammy,
    portrait: Portrait.Cammy,
    hyper: Hyper.Cammy,
    pointCost: 4,
    characterSelectOrder: 45,
  },
  CaptainAmerica: {
    name: "Captain America",
    icon: Icon.CaptainAmerica,
    portrait: Portrait.CaptainAmerica,
    hyper: Hyper.CaptainAmerica,
    pointCost: 2,
    characterSelectOrder: 33,
  },
  CaptainCommando: {
    name: "Captain Commando",
    icon: Icon.CaptainCommando,
    portrait: Portrait.CaptainCommando,
    hyper: Hyper.CaptainCommando,
    pointCost: 4,
    characterSelectOrder: 47,
  },
  Charlie: {
    name: "Charlie",
    icon: Icon.Charlie,
    portrait: Portrait.Charlie,
    hyper: Hyper.Charlie,
    pointCost: 2,
    characterSelectOrder: 21,
  },
  ChunLi: {
    name: "Chun-Li",
    icon: Icon.ChunLi,
    portrait: Portrait.ChunLi,
    hyper: Hyper.Chunli,
    pointCost: 0,
    characterSelectOrder: 53,
  },
  Colossus: {
    name: "Colossus",
    icon: Icon.Colossus,
    portrait: Portrait.Colossus,
    hyper: Hyper.Colossus,
    pointCost: 3,
    characterSelectOrder: 20,
  },
  Cyclops: {
    name: "Cyclops",
    icon: Icon.Cyclops,
    portrait: Portrait.Cyclops,
    hyper: Hyper.Cyclops,
    pointCost: 4,
    characterSelectOrder: 10,
  },
  Dan: {
    name: "Dan",
    icon: Icon.Dan,
    portrait: Portrait.Dan,
    hyper: Hyper.Dan,
    pointCost: 0,
    characterSelectOrder: 37,
  },
  Dhalsim: {
    name: "Dhalsim",
    icon: Icon.Dhalsim,
    portrait: Portrait.Dhalsim,
    hyper: Hyper.Dhalsim,
    pointCost: 3,
    characterSelectOrder: 29,
  },
  DoctorDoom: {
    name: "Doctor Doom",
    icon: Icon.Doom,
    portrait: Portrait.DoctorDoom,
    hyper: Hyper.DoctorDoom,
    pointCost: 4,
    characterSelectOrder: 41,
  },
  Felicia: {
    name: "Felicia",
    icon: Icon.Felicia,
    portrait: Portrait.Felicia,
    hyper: Hyper.Felicia,
    pointCost: 1,
    characterSelectOrder: 1,
  },
  Gambit: {
    name: "Gambit",
    icon: Icon.Gambit,
    portrait: Portrait.Gambit,
    hyper: Hyper.Gambit,
    pointCost: 2,
    characterSelectOrder: 27,
  },
  Guile: {
    name: "Guile",
    icon: Icon.Guile,
    portrait: Portrait.Guile,
    hyper: Hyper.Guile,
    pointCost: 3,
    characterSelectOrder: 8,
  },
  Hayato: {
    name: "Hayato",
    icon: Icon.Hayato,
    portrait: Portrait.Hayato,
    hyper: Hyper.Hayato,
    pointCost: 1,
    characterSelectOrder: 32,
  },
  Hulk: {
    name: "Hulk",
    icon: Icon.Hulk,
    portrait: Portrait.Hulk,
    hyper: Hyper.Hulk,
    pointCost: 3,
    characterSelectOrder: 49,
  },
  Iceman: {
    name: "Iceman",
    icon: Icon.Iceman,
    portrait: Portrait.Iceman,
    hyper: Hyper.IceMan,
    pointCost: 2,
    characterSelectOrder: 26,
  },
  Ironman: {
    name: "Iron Man",
    icon: Icon.IronMan,
    portrait: Portrait.Ironman,
    hyper: Hyper.IronMan,
    pointCost: 5,
    characterSelectOrder: 50,
  },
  Jill: {
    name: "Jill",
    icon: Icon.Jill,
    portrait: Portrait.Jill,
    hyper: Hyper.Jill,
    pointCost: 2,
    characterSelectOrder: 7,
  },
  Jin: {
    name: "Jin",
    icon: Icon.Jin,
    portrait: Portrait.Jin,
    hyper: Hyper.Jin,
    pointCost: 2,
    characterSelectOrder: 30,
  },
  Juggernaut: {
    name: "Juggernaut",
    icon: Icon.Juggernaut,
    portrait: Portrait.Juggernaut,
    hyper: Hyper.Juggernaut,
    pointCost: 3,
    characterSelectOrder: 35,
  },
  Ken: {
    name: "Ken",
    icon: Icon.Ken,
    portrait: Portrait.Ken,
    hyper: Hyper.Ken,
    pointCost: 3,
    characterSelectOrder: 13,
  },
  M_Bison: {
    name: "M. Bison",
    icon: Icon.MBison,
    portrait: Portrait.M_Bison,
    hyper: Hyper.M_Bison,
    pointCost: 2,
    characterSelectOrder: 3,
  },
  Magneto: {
    name: "Magneto",
    icon: Icon.Magneto,
    portrait: Portrait.Magneto,
    hyper: Hyper.Magneto,
    pointCost: 5,
    characterSelectOrder: 11,
  },
  Marrow: {
    name: "Marrow",
    icon: Icon.Marrow,
    portrait: Portrait.Marrow,
    hyper: Hyper.Marrow,
    pointCost: 1,
    characterSelectOrder: 17,
  },
  Megaman: {
    name: "Mega Man",
    icon: Icon.MegaMan,
    portrait: Portrait.Megaman,
    hyper: Hyper.MegaMan,
    pointCost: 3,
    characterSelectOrder: 2,
  },
  Morrigan: {
    name: "Morrigan",
    icon: Icon.Morrigan,
    portrait: Portrait.Morrigan,
    hyper: Hyper.Morrigan,
    pointCost: 2,
    characterSelectOrder: 39,
  },
  OmegaRed: {
    name: "Omega Red",
    icon: Icon.OmegaRed,
    portrait: Portrait.OmegaRed,
    hyper: Hyper.OmegaRed,
    pointCost: 3,
    characterSelectOrder: 54,
  },
  Psylocke: {
    name: "Psylocke",
    icon: Icon.Psylocke,
    portrait: Portrait.Psylocke,
    hyper: Hyper.Psylocke,
    pointCost: 4,
    characterSelectOrder: 4,
  },
  Rogue: {
    name: "Rogue",
    icon: Icon.Rogue,
    portrait: Portrait.Rogue,
    hyper: Hyper.Rogue,
    pointCost: 3,
    characterSelectOrder: 5,
  },
  Roll: {
    name: "Roll",
    icon: Icon.Roll,
    portrait: Portrait.Roll,
    hyper: Hyper.Roll,
    pointCost: 0,
    characterSelectOrder: 52,
  },
  RubyHeart: {
    name: "Ruby Heart",
    icon: Icon.RubyHeart,
    portrait: Portrait.RubyHeart,
    hyper: Hyper.RubyHeart,
    pointCost: 3,
    characterSelectOrder: 24,
  },
  Ryu: {
    name: "Ryu",
    icon: Icon.Ryu,
    portrait: Portrait.Ryu,
    hyper: Hyper.Ryu,
    pointCost: 1,
    characterSelectOrder: 15,
  },
  Sabretooth: {
    name: "Sabretooth",
    icon: Icon.Sabretooth,
    portrait: Portrait.Sabretooth,
    hyper: Hyper.Sabretooth,
    pointCost: 2,
    characterSelectOrder: 44,
  },
  Sakura: {
    name: "Sakura",
    icon: Icon.Sakura,
    portrait: Portrait.Sakura,
    hyper: Hyper.Sakura,
    pointCost: 3,
    characterSelectOrder: 38,
  },
  Sentinel: {
    name: "Sentinel",
    icon: Icon.Sentinel,
    portrait: Portrait.Sentinel,
    hyper: Hyper.Sentinel,
    pointCost: 5,
    characterSelectOrder: 56,
  },
  Servbot: {
    name: "Servbot",
    icon: Icon.Servbot,
    portrait: Portrait.Servbot,
    hyper: Hyper.ServBot,
    pointCost: 0,
    characterSelectOrder: 51,
  },
  ShumaGorath: {
    name: "Shuma-Gorath",
    icon: Icon.ShumaGorath,
    portrait: Portrait.ShumaGorath,
    hyper: Hyper.Shuma_Gorath,
    pointCost: 1,
    characterSelectOrder: 48,
  },
  SilverSamurai: {
    name: "Silver Samurai",
    icon: Icon.SilverSamurai,
    portrait: Portrait.SilverSamurai,
    hyper: Hyper.SilverSamurai,
    pointCost: 3,
    characterSelectOrder: 19,
  },
  Sonson: {
    name: "SonSon",
    icon: Icon.Sonson,
    portrait: Portrait.Sonson,
    hyper: Hyper.SonSon,
    pointCost: 2,
    characterSelectOrder: 16,
  },
  SpiderMan: {
    name: "Spider-Man",
    icon: Icon.SpiderMan,
    portrait: Portrait.SpiderMan,
    hyper: Hyper.SpiderMan,
    pointCost: 3,
    characterSelectOrder: 34,
  },
  Spiral: {
    name: "Spiral",
    icon: Icon.Spiral,
    portrait: Portrait.Spiral,
    hyper: Hyper.Spiral,
    pointCost: 4,
    characterSelectOrder: 36,
  },
  Storm: {
    name: "Storm",
    icon: Icon.Storm,
    portrait: Portrait.Storm,
    hyper: Hyper.Storm,
    pointCost: 5,
    characterSelectOrder: 55,
  },
  Strider: {
    name: "Strider Hiryu",
    icon: Icon.Strider,
    portrait: Portrait.Strider,
    hyper: Hyper.StriderHiryu,
    pointCost: 4,
    characterSelectOrder: 46,
  },
  Thanos: {
    name: "Thanos",
    icon: Icon.Thanos,
    portrait: Portrait.Thanos,
    hyper: Hyper.Thanos,
    pointCost: 2,
    characterSelectOrder: 6,
  },
  TronBonne: {
    name: "Tron Bonne",
    icon: Icon.Tron,
    portrait: Portrait.TronBonne,
    hyper: Hyper.T_Bonne,
    pointCost: 4,
    characterSelectOrder: 14,
  },
  Venom: {
    name: "Venom",
    icon: Icon.Venom,
    portrait: Portrait.Venom,
    hyper: Hyper.Venom,
    pointCost: 1,
    characterSelectOrder: 42,
  },
  WarMachine: {
    name: "War Machine",
    icon: Icon.WarMachine,
    portrait: Portrait.WarMachine,
    hyper: Hyper.Warmachine,
    pointCost: 4,
    characterSelectOrder: 12,
  },
  WolverineAdamantium: {
    name: "Wolverine (Adamantium)",
    icon: Icon.WolverineA,
    portrait: Portrait.WolverineAdamantium,
    hyper: Hyper.WolverineAdamantium,
    pointCost: 1,
    characterSelectOrder: 18,
  },
  WolverineBone: {
    name: "Wolverine (Bone)",
    icon: Icon.Wolverine,
    portrait: Portrait.WolverineBone,
    hyper: Hyper.WolverineBone,
    pointCost: 1,
    characterSelectOrder: 43,
  },
  Zangief: {
    name: "Zangief",
    icon: Icon.Zangief,
    portrait: Portrait.Zangief,
    hyper: Hyper.Zangief,
    pointCost: 2,
    characterSelectOrder: 23,
  },
};

const ratioRoster: RatioSystem = {
  name: "Justin Wong's 2022 Ratio List",
  description: "",
  roster: characters,
  maxPoints: 7,
};

export default ratioRoster;
