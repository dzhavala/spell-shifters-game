(this["webpackJsonpspell-shifters-game"]=this["webpackJsonpspell-shifters-game"]||[]).push([[0],{29:function(e,t,s){},38:function(e,t){},40:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var n=s(6),r=s.n(n),l=s(24),i=s.n(l),o=(s(29),s(7)),c=s(5),a="shift scroll",u="heal potion",h="rune",f="monster",p=s(43),d=s(8),m=s(17),j=function(){function e(t,s){Object(d.a)(this,e),this.name=t,this.matrix=s}return Object(m.a)(e,[{key:"getStrength",value:function(){var e=0;return this.matrix.forEach((function(t){t&&e++})),e}}]),e}(),b=[new j("Flower bird",p.b([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]])),new j("Fire ball",p.b([[0,0,0,0,0,0,0],[0,0,1,0,0,0,0],[0,0,1,0,0,0,0],[0,0,1,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]])),new j("Ktulhu guard",p.b([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,1,1,1,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]])),new j("Fat imp",p.b([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]])),new j("Big foot",p.b([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,1,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]])),new j("Furry",p.b([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]))],S=function e(t,s,n){Object(d.a)(this,e),this.name=t,this.matrix=n,this.type=s},v=[new S("Desert",1,p.b([[4,1,1,1,1,1,1],[4,1,1,1,1,1,1],[4,4,1,1,1,2,2],[4,4,4,1,2,2,2],[4,4,4,3,2,2,2],[4,4,3,3,3,2,2],[3,3,3,3,3,3,2]])),new S("River",2,p.b([[1,1,1,1,1,1,1],[4,1,1,1,1,2,2],[4,1,1,1,2,2,2],[4,4,4,2,2,2,2],[4,4,3,3,2,2,2],[4,3,3,3,2,2,2],[3,3,3,3,3,3,2]])),new S("Forest",3,p.b([[1,1,1,1,1,1,1],[4,1,1,1,1,2,2],[4,4,4,1,2,2,2],[4,4,4,3,2,2,2],[4,3,3,3,2,2,2],[3,3,3,3,3,3,2],[3,3,3,3,3,3,2]])),new S("Fire land",4,p.b([[4,1,1,1,1,1,1],[4,4,1,1,1,1,2],[4,4,4,1,1,2,2],[4,4,4,4,2,2,2],[4,4,4,3,3,2,2],[4,4,4,3,3,2,2],[3,3,3,3,3,3,2]]))],O=s(3),x=function(e){var t,s=0,n=Math.random();for(t in e)if(n<=(s+=e[t]))return Number(t)},g=function(e){return Math.floor(Math.random())*e},N=function(e,t){return e.filter((function(e){return e===t})).length},R=function(e,t,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return N(e,s)-N(t,s)+n},M=function(e,t){var s=R(e,t,1),n=R(e,t,2),r=R(e,t,3),l=R(e,t,4);return[{spell:1,diff:s<0?Math.abs(s):0},{spell:2,diff:n<0?Math.abs(n):0},{spell:3,diff:r<0?Math.abs(r):0},{spell:4,diff:l<0?Math.abs(l):0}]},y=function(e,t,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=n.find((function(e){return e.spell===s}))||{},l=r.diff||0;return R(e,t,s,l)>=0},P=function(e,t){var s=p.d(p.c(e)),n=!1;return e.forEach((function(e,r){if(e){var l=r[0]+t[0],i=r[1]+t[1];if(l<0||l>=p.c(s).valueOf()[0])return n=!0,!1;if(i<0||i>=p.c(s).valueOf()[1])return n=!0,!1;s.subset(p.a(l,i),1)}})),n&&(s=e),s},k=function(e){switch(JSON.stringify(e)){case"[-1,0]":return[1,0];case"[0,1]":return[0,-1];case"[1,0]":return[-1,0];case"[0,-1]":return[0,1];default:return[0,0]}},w=function(e){switch(JSON.stringify(e)){case"[-1,0]":return 1;case"[0,1]":return 2;case"[1,0]":return 3;case"[0,-1]":return 4;default:return!1}},T=function(e){var t=e.prevFightResult,s=e.hero,n=t.monsterSpellsOnBiome,r=t.failureRecord,l=t.shiftSpell,i=r.filter((function(e){return!e.diff})).map((function(e){return e.spell})),o=l?function(e,t){var s=k(t),n=w(s);return n?e.filter((function(e){return e!==n})):e}(i,l):i,c=function(e,t){var s=[];return e.map((function(n){e.filter((function(e){return e===n})).length>t.filter((function(e){return e===n})).length&&!s.includes(n)&&s.push(n)})),s}(s.spells,n),a=o.filter((function(e){return c.includes(e)})),u=s.getStrongestSpell();return function(e){switch(e){case 1:return[-1,0];case 2:return[0,1];case 3:return[1,0];case 4:return[0,-1];default:return[0,0]}}(a.includes(u)?u:a.pop())},F=function(e){return{shiftSpellScrollsLeft:e.shiftSpellScrolls,healPotionsLeft:e.healPotions,spells:e.getSpells(),strongestSpell:e.getStrongestSpell(),runesLeft:e.runes}},B=function(e){var t=e.hero,s=e.monster,n=e.biome,r=e.shiftSpell,l=e.runes,i=function(e,t,s){s&&(t=P(t,s));var n=function(e,t){return e.map((function(e,s){return e*t.get(s)}))}(e,t),r=[];return n.forEach((function(e){e&&r.push(e)})),{monsterSpellsMatrixOnBiome:n,activeSpells:r}}(n.matrix,s.matrix,r),o=i.monsterSpellsMatrixOnBiome,a=i.activeSpells,u=function(e,t,s){var n=y(e,t,1,s),r=y(e,t,2,s),l=y(e,t,3,s),i=y(e,t,4,s),o=n&&r&&l&&i;return{isSuccess:o,failureRecord:!o&&M(e,t),monsterSpellsOnBiome:t.sort(),usedRunes:s}}(t.spells,a,l);return Object(c.a)(Object(c.a)({},u),{},{monsterSpellsMatrixOnBiome:o,shiftSpell:r,runes:l,heroStatus:F(t)})},H=function(e){return C(e).reduce((function(e,t){return e+t.diff}),0)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.failureRecord,s=void 0===t?[{}]:t;return s.filter((function(e){return e.diff}))},L=function(e){var t=e.hero,s=e.monster,n=e.biome,r=e.shiftSpell,l=B({hero:t,monster:s,biome:n,shiftSpell:r});return Object(c.a)(Object(c.a)({},l),{},{shiftSpellWasUsed:!0})},E=function(e){var t=e.hero,s=e.monster,n=e.biome,r=e.prevFightResult,l=U({hero:t,monster:s,biome:n,prevFightResult:r}),i=l;return t.useShiftSpellScroll(),x({0:.5,1:.5})&&((i=L({hero:t,monster:s,biome:n,shiftSpell:[0,1]})).isSuccess||(i=L({hero:t,monster:s,biome:n,shiftSpell:[0,-1]})),i.isSuccess||(i=L({hero:t,monster:s,biome:n,shiftSpell:[1,0]})),i.isSuccess||(i=L({hero:t,monster:s,biome:n,shiftSpell:[-1,0]})),i.isSuccess||(i=l)),i},U=function(e){var t=e.hero,s=e.monster,n=e.biome,r=e.prevFightResult,l=T({prevFightResult:r,hero:t});return L({hero:t,monster:s,biome:n,shiftSpell:l})},J=function(e,t){return Object(c.a)(Object(c.a)({},e),{},{matrix:P(e.matrix,t)})},A=function(){function e(t,s){Object(d.a)(this,e),this.name=t,this.spells=s.slice(0,5).sort(),this.shiftSpellScrolls=1,this.healPotions=0,this.runes=0,this.monsterTrophies=[]}return Object(m.a)(e,[{key:"getSpells",value:function(){return Object(O.a)(this.spells)}},{key:"getStrongestSpell",value:function(){var e=this;return Object(O.a)(this.spells).sort((function(t,s){return e.spells.filter((function(e){return e===t})).length-e.spells.filter((function(e){return e===s})).length}))[this.spells.length-1]}},{key:"useShiftSpellScroll",value:function(){this.shiftSpellScrolls&&this.shiftSpellScrolls--}},{key:"addShiftSpellScroll",value:function(){this.shiftSpellScrolls++}},{key:"addHealPotion",value:function(){this.spells.length<5?this.addRandomSpell():this.healPotions++}},{key:"addRune",value:function(){this.runes++}},{key:"useRunes",value:function(e){this.runes-=e}},{key:"hit",value:function(){this.healPotions?this.useHealPotion():this.spells.length>4&&this.removeRandomSpell()}},{key:"useHealPotion",value:function(){this.healPotions&&this.healPotions--}},{key:"removeRandomSpell",value:function(){var e=this.spells[Math.floor(Math.random()*this.spells.length)];this.spells.splice(e-1,1)}},{key:"addRandomSpell",value:function(){var e,t=this,s=[1,2,3,4],n=s.filter((function(e){return!t.spells.includes(e)}));e=n.length?n.pop():s[Math.floor(Math.random()*s.length)],this.spells.push(e)}},{key:"addMonsterTrophy",value:function(e){this.monsterTrophies.push(e)}},{key:"getMonsterTrophiesCount",value:function(){return this.monsterTrophies.length}},{key:"getMonsterTrophiesPoints",value:function(){return this.monsterTrophies.reduce((function(e,t){return e+t.getStrength()}),0)}},{key:"getTotalPoints",value:function(){return this.getMonsterTrophiesPoints()+this.runes+this.healPotions+this.shiftSpellScrolls}},{key:"giveRandomTreasure",value:function(){var e=[a,u,h][g(3)];switch(this.spells.length<5&&(e=u),e){case a:this.addShiftSpellScroll();break;case u:this.addHealPotion();break;case h:this.addRune();break;default:return}}}]),e}(),W=[new A("Egemon",[4,3,1,2,1]),new A("Alex",[4,3,1,2,2]),new A("Steve",[4,3,1,2,3]),new A("Amogus",[4,3,1,2,4])],D=s(0);function I(e){var t=e.hero,s=e.heroStatus,n=s?s.strongestSpell:t.getStrongestSpell(),r=s?s.shiftSpellScrollsLeft:t.shiftSpellScrolls,l=s?s.runesLeft:t.runes,i=s?s.healPotionsLeft:t.healPotions,o=s?s.spells:t.spells;return Object(D.jsxs)("div",{className:"hero",children:[Object(D.jsx)("h3",{children:t.name}),Object(D.jsxs)("div",{children:["Shifts Scrolls: ",Object(D.jsx)("b",{children:r})]}),Object(D.jsxs)("div",{children:["Runes: ",Object(D.jsx)("b",{children:l})]}),Object(D.jsxs)("div",{children:["Heal potions: ",Object(D.jsx)("b",{children:i})]}),Object(D.jsx)("div",{className:"spells",children:o.map((function(e,t){return Object(D.jsx)("span",{className:"spell spell-".concat(e),children:e},t)}))}),Object(D.jsxs)("span",{className:"spells",children:["Strongest: ",Object(D.jsx)("span",{className:"spell spell-".concat(n),children:n})]}),Object(D.jsxs)("div",{className:"monsterTrophies",children:["Monsters trophies: ",Object(D.jsxs)("b",{children:[t.getMonsterTrophiesCount(),"/",t.getMonsterTrophiesPoints()]}),Object(D.jsx)("br",{}),"Total points: ",Object(D.jsx)("b",{children:t.getTotalPoints()})]})]})}s(40);function K(e){var t=e.biome.matrix.valueOf();return Object(D.jsx)("div",{className:"biome-matrix",children:Object(D.jsx)("div",{className:"spells-matrix",children:t.map((function(e,t){return Object(D.jsx)("div",{className:"spells",children:e.map((function(e,t){return Object(D.jsx)("span",{className:"spell spell-".concat(e),children:e},t)}))},t)}))})})}function q(e){var t=e.monsterSpellsMatrixOnBiome.valueOf();return Object(D.jsx)("div",{className:"monster-matrix",children:Object(D.jsx)("div",{className:"spells-matrix",children:t.map((function(e,t){return Object(D.jsx)("div",{className:"spells",children:e.map((function(e,t){return Object(D.jsx)("span",{className:"spell spell-".concat(e),children:e},t)}))},t)}))})})}function z(e){var t=e.failureRecord;return Object(D.jsxs)("div",{className:"failureRecord",children:[Object(D.jsx)("span",{className:"label",children:"Failure diff:"}),Object(D.jsx)("div",{className:"spells",children:t.map((function(e){var t=e.spell,s=e.diff;return Object(D.jsx)("span",{className:"spell spell-".concat(t," ").concat(!s&&"empty"),children:s||" "},t)}))})]})}function G(e){var t=function(e){switch(JSON.stringify(e)){case"[-1,0]":return 1;case"[0,1]":return 2;case"[1,0]":return 3;case"[0,-1]":return 4;default:return!1}}(e.shiftSpell);return Object(D.jsxs)("div",{className:"shiftSpellUsed",children:[Object(D.jsx)("span",{className:"label",children:"Shift scroll:"}),Object(D.jsx)("div",{className:"spells",children:Object(D.jsx)("span",{className:"spell spell-".concat(t)})})]})}function Q(e){var t=e.runes;return Object(D.jsxs)("div",{className:"runeUsed",children:[Object(D.jsx)("span",{className:"label",children:"Rune:"}),Object(D.jsx)("div",{className:"spells",children:t.map((function(e){var t=e.spell;return Object(D.jsx)("span",{className:"spell spell-".concat(t)},t)}))})]})}function V(e){var t=e.turnRecord;return t.monster?Object(D.jsxs)("div",{className:"turn ".concat(t.isSuccess?"isSuccess":"isFailure"),children:[Object(D.jsxs)("div",{className:"turnDescription",children:[Object(D.jsx)(I,{hero:t.hero,heroStatus:t.phases[0].heroStatus}),"vs",Object(D.jsxs)("span",{className:"meetDetails",children:[Object(D.jsx)("b",{children:t.monster.name})," on the ",Object(D.jsx)("b",{children:t.biome.name})," biome"]})]}),Object(D.jsx)("div",{className:"turnContent",children:t.phases.map((function(e,s){return Object(D.jsxs)("div",{className:"turnPhase",children:[Object(D.jsxs)("div",{className:"monsterAndBiomeMatrixes",children:[Object(D.jsx)(K,{biome:t.biome}),Object(D.jsx)(q,{monsterSpellsMatrixOnBiome:e.monsterSpellsMatrixOnBiome})]}),e.shiftSpellWasUsed&&Object(D.jsx)(G,{shiftSpell:e.shiftSpell}),e.runesWasUsed&&Object(D.jsx)(Q,{runes:e.runes}),e.failureRecord&&Object(D.jsx)(z,{className:"failureRecord",failureRecord:e.failureRecord})]},s)}))})]}):Object(D.jsx)("div",{className:"turn",children:Object(D.jsxs)("div",{className:"treasure",children:[t.findShiftScroll&&Object(D.jsxs)("span",{className:"shiftSpell",children:["Shift spell scroll ",Object(D.jsx)("br",{}),Object(D.jsx)("b",{children:t.heroStatus.shiftSpellScrollsLeft})]}),t.findHealPotion&&Object(D.jsxs)("span",{className:"healPotion",children:["Heal potion",Object(D.jsx)("br",{}),Object(D.jsx)("b",{children:t.heroStatus.healPotionsLeft})]}),t.findRune&&Object(D.jsxs)("span",{className:"rune",children:["Rune",Object(D.jsx)("br",{}),Object(D.jsx)("b",{children:t.heroStatus.runesLeft})]})]})})}for(var X=window.turnRecords=[],Y=function(e){var t=e.hero,s=e.monster,n=e.biome,r=e.turnRecord,l=s,i=B({hero:t,monster:s,biome:n});r.phases.push(i),!i.isSuccess&&t.shiftSpellScrolls&&(i=E({hero:t,monster:l,biome:n,prevFightResult:i}),l=J(l,i.shiftSpell),r.phases.push(i),!i.isSuccess&&i.shiftSpell&&t.shiftSpellScrolls&&x({0:.4,1:.6})&&(i=E({hero:t,monster:l,biome:n,prevFightResult:i}),l=J(l,i.shiftSpell),r.phases.push(i))),!i.isSuccess&&t.runes>=H(i)&&(i=function(e){var t=e.hero,s=e.monster,n=e.biome,r=e.prevFightResult,l=C(r),i=H(r);if(t.runes>=i){t.useRunes(i);var o=B({hero:t,monster:s,biome:n,runes:l});return Object(c.a)(Object(c.a)({},o),{},{runesWasUsed:!0})}return r}({hero:t,monster:l,biome:n,prevFightResult:i}),r.phases.push(i)),r.isSuccess=i.isSuccess,i.isSuccess?t.addMonsterTrophy(s):t.hit()},Z=function(e){var t=e.hero,s=(e.monster,e.biome),n={key:Math.random(),hero:t,biome:s,phases:[]},r=[f,a,u,h][x({0:.6,1:.2,2:.1,3:.1})];if(r===f){var l=b[Math.floor(Math.random()*b.length)];n.monster=l,Y({hero:t,monster:l,biome:s,turnRecord:n})}else r===a?(n.findShiftScroll=!0,t.addShiftSpellScroll()):r===u?(n.findHealPotion=!0,t.addHealPotion()):r===h&&(n.findRune=!0,t.addRune());X.push(Object(c.a)(Object(c.a)({},n),{},{heroStatus:F(t)}))},$=function(e){var t,s=function(e){var t=e[0];return e.forEach((function(e){e!==t&&e.getMonsterTrophiesCount()<t.getMonsterTrophiesCount()&&(t=e)})),t}(W),n=function(e){var t=e[0];return e.forEach((function(e){e!==t&&e.getMonsterTrophiesCount()>t.getMonsterTrophiesCount()&&(t=e)})),t}(W);t=s,n.getMonsterTrophiesCount(),t.getMonsterTrophiesCount(),W.forEach((function(e){var t=e.getStrongestSpell(),n=v.find((function(e){return e.type===t})),r=v[g(v.length)],l=[n,r][x({0:.8,1:.2})];e===s&&Z({hero:e,biome:l=r}),Z({hero:e,biome:l})}))},_=0;_<10;_++)$();var ee=X.reduce((function(e,t){return e[t.hero.name]||(e[t.hero.name]=[]),e[t.hero.name].push(t),e}),{});console.log({turnRecordsByHero:ee}),console.log("-------");var te=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("h2",{children:"The Spells shifters game"}),Object(D.jsx)("div",{className:"heroesRecords final",children:Object.entries(ee).map((function(e){var t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(D.jsx)("div",{className:"heroRecords",children:Object(D.jsx)(I,{hero:n[0].hero})},s)}))}),Object(D.jsx)("hr",{}),Object(D.jsx)("div",{className:"heroesRecords",children:Object.entries(ee).map((function(e){var t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(D.jsxs)("div",{className:"heroRecords",children:[Object(D.jsx)("h3",{children:s}),n.map((function(e){return Object(D.jsx)(V,{turnRecord:e},e.key)}))]},s)}))})]})};i.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(te,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3b58014d.chunk.js.map