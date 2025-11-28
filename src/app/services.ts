import { Injectable, signal } from '@angular/core';
import { cardUserInterface } from './carduser/carduser.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: cardUserInterface[] = [
    {
      id: 1,
      photo: 'https://randomuser.me/api/portraits/women/42.jpg',
      name: 'Lelah Nickhols',
      job: 'UX UI Designer',
      tag: ['coffee', 'tea'],
      details: 'I enjoy hawking best-of-breed margins at all hours of the day and night.',
      galery: [
        'https://randomuser.me/api/portraits/women/43.jpg',
        'https://randomuser.me/api/portraits/women/44.jpg',
      ],
    },
    {
      id: 2,
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Jennie Copeland',
      job: 'Product Designer',
      tag: ['cinema', 'music'],
      details: 'I enjoy hawking best-of-breed margins at all hours of the day and night.',
      galery: [
        'https://randomuser.me/api/portraits/women/69.jpg',
        'https://randomuser.me/api/portraits/women/70.jpg',
      ],
    },
    {
      id: 4,
      photo: 'https://randomuser.me/api/portraits/men/76.jpg',
      name: 'David Brown',
      job: 'Back-end Developer',
      tag: ['code', 'dev', 'front'],
      details:
        'Au fil des années, son nom commença à circuler discrètement parmi les cercles littéraires et artistiques. On parlait de ce jeune voyageur qui écrivait comme s’il peignait, qui décrivait les émotions avec une intensité rare et qui transmettait dans ses récits une authenticité brute. Pourtant, Lysandre refusait la célébrité. Pour lui, la reconnaissance n’avait de valeur que si elle servait à ouvrir de nouvelles portes vers la découverte. Il préférait disparaître dans des villages reculés, vivre au rythme des saisons, écouter le murmure du vent ou le craquement d’un feu de camp plutôt que de s’installer dans le confort et la routine.',
      galery: [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 5,
      photo: 'https://randomuser.me/api/portraits/women/21.jpg',
      name: 'Sophie Turner',
      job: 'Data Analyst',
      tag: ['data', 'ia'],
      details:
        'Aujourd’hui encore, nul ne sait vraiment où se trouve Lysandre Morel. Certains affirment l’avoir vu dans les ruelles étroites de Marrakech, d’autres jurent l’avoir croisé sur un bateau voguant vers l’Amérique du Sud. Ses carnets, eux, circulent de main en main, traduits en plusieurs langues, et inspirent ceux qui rêvent d’une existence libre et authentique. Peut-être est-il devenu une légende vivante, ou peut-être s’efface-t-il volontairement dans l’anonymat, continuant d’écrire pour lui seul. Ce qui demeure certain, c’est que son histoire, mi-réelle mi-imaginaire, incarne l’éternelle quête de sens et d’aventure qui sommeille en chacun de nous.',
      galery: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 6,
      photo: 'https://randomuser.me/api/portraits/men/50.jpg',
      name: 'James Wilson',
      job: 'DevOps Engineer',
      tag: ['cloud', 'base de donnée'],
      details:
        'Dès lors, sa vie prit une dimension nouvelle. Selena devint une voyageuse de l’ombre, parcourant les villes et les campagnes, offrant parfois son aide à ceux qui souffraient, mais toujours en quête de réponses. Certains disent qu’elle aurait prédit la chute de deux dynasties. D’autres racontent qu’elle sauva un village entier d’une épidémie en conseillant d’étranges rituels que nul médecin n’aurait osé prescrire. À chaque étape de son parcours, elle laissait derrière elle une trace faite de peur et de fascination mêlées.',
      galery: [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
    {
      id: 7,
      photo: 'https://randomuser.me/api/portraits/women/15.jpg',
      name: 'Emma Johnson',
      job: 'UX Researcher',
      tag: ['user', 'ux xi', 'engeneer'],
      details:
        'Son enfance fut solitaire. Tandis que les autres enfants jouaient, elle se réfugiait dans la bibliothèque poussiéreuse de son manoir, explorant des grimoires interdits et des récits anciens qui parlaient de magie oubliée, de royaumes disparus et d’esprits errants. Chaque page qu’elle lisait semblait réveiller en elle une mémoire endormie. Très tôt, elle commença à rêver de choses qui n’existaient pas encore, et ces rêves, troublants de précision, se réalisaient parfois dans les jours qui suivaient.',
      galery: [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1537432376769-00a0d0e4e227?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1519389950473-047a0277781c?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1581091215366-033f42ec6e6b?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=300&h=300&q=60',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&h=300&q=60',
      ],
    },
  ];

  // filtre
  filtre = signal('');

  updateSearch(value: string) {
    this.filtre.set(value);
    console.log('text tapez :', value);
  }

  // Récupérer tous les users
  getUsers(): cardUserInterface[] {
    return this.users;
  }

  // Récupérer 1 user
  getUserById(id: number): cardUserInterface | undefined {
    return this.users.find((user) => user.id === id);
  }
}
