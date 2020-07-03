export interface Species {
   capture_rate: number;
   gender_rate: number;
   egg_groups: EggGroup;
   hatch_counter: number;
}

export interface EggGroup {
   name: string;
}

export interface EvolutionChain {
   id: number;
   chain: ChainLink;
}

export interface ChainLink {
   species: NamedApiRespource;
   evolves_to: ChainLink[];
}

export interface NamedApiRespource {
   name: string;
   url: string;
}

export interface Pokemon {
   id: number;
   name: string;
   sprites: PokemonSprites;
}

export interface PokemonSprites {
   front_default: string;
}
