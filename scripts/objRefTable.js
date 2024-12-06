const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Camera3D,
		C3.Plugins.Spritefont2,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Acts.Spawn
	];
};
self.C3_JsPropNameTable = [
	{sprite_ground_01: 0},
	{Sólido: 0},
	{Sprite: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{spr_player: 0},
	{Teclado: 0},
	{Sprite2: 0},
	{spr_plataforma_01: 0},
	{spr_plataforma_02: 0},
	{Sprite3: 0},
	{Senóide: 0},
	{sprite_plataforma_04: 0},
	{spr_plataforma_03: 0},
	{spr_ball: 0},
	{Sprite4: 0},
	{spr_arrow: 0},
	{spr_bg_01: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Câmera3D: 0},
	{FonteDeSprites: 0},
	{FonteDeSprites2: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{spr_bg_02: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{spr_bg_03: 0},
	{spr_bg_04: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{spr_death: 0},
	{Áudio: 0},
	{spr_grass_01: 0},
	{Sprite17: 0},
	{spr_grass_02: 0},
	{spr_ground_01: 0},
	{spr_arrow_02: 0},
	{spr_p: 0},
	{spr_fi: 0},
	{spr_fo: 0},
	{spr_death1: 0}
];

self.InstanceType = {
	sprite_ground_01: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	spr_player: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	spr_plataforma_01: class extends self.ISpriteInstance {},
	spr_plataforma_02: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	sprite_plataforma_04: class extends self.ISpriteInstance {},
	spr_plataforma_03: class extends self.ISpriteInstance {},
	spr_ball: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	spr_arrow: class extends self.ISpriteInstance {},
	spr_bg_01: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Câmera3D: class extends self.IInstance {},
	FonteDeSprites: class extends self.ISpriteFontInstance {},
	FonteDeSprites2: class extends self.ISpriteFontInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	spr_bg_02: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	spr_bg_03: class extends self.ISpriteInstance {},
	spr_bg_04: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	spr_death: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	spr_grass_01: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	spr_grass_02: class extends self.ISpriteInstance {},
	spr_ground_01: class extends self.ISpriteInstance {},
	spr_arrow_02: class extends self.ISpriteInstance {},
	spr_p: class extends self.ISpriteInstance {},
	spr_fi: class extends self.ISpriteInstance {},
	spr_fo: class extends self.ISpriteInstance {},
	spr_death1: class extends self.ISpriteInstance {}
}