import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    authService = TestBed.get(AuthService);

    let localStore = {};
    const mockLocalStorage = {
      setItem: (key: string, value: string) => {
        localStore[key] = `${value}`;
      },
      getItem: (key: string): string => {
        return key in localStore ? localStore[key] : null;
      },
      removeItem: (key: string) => {
        delete localStore[key];
      },
      clear: () => {
        localStore = {};
      }
    };

    spyOn(localStorage, 'setItem')
        .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'getItem')
        .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'removeItem')
        .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
        .and.callFake(mockLocalStorage.clear);

    let sessionStore = {};
    const mockSessionStorage = {
      setItem: (key: string, value: string) => {
        sessionStore[key] = `${value}`;
      },
      getItem: (key: string): string => {
        return key in sessionStore ? sessionStore[key] : null;
      },
      removeItem: (key: string) => {
        delete sessionStore[key];
      },
      clear: () => {
        sessionStore = {};
      }
    };

    spyOn(sessionStorage, 'getItem')
        .and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem')
        .and.callFake(mockSessionStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
        .and.callFake(mockSessionStorage.removeItem);
    spyOn(sessionStorage, 'clear')
        .and.callFake(mockSessionStorage.clear);

  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  const user = { name: 'user', email: 'email', password: 'pass'};
  const user2 = { name: 'user2', email: 'email', password: 'pass2'};

  describe('register user', () => {
    it('should store user in local storage on registration',
        () => {
          const user = { name: 'user', email: 'email', password: 'pass'};
          authService.register(user.name, user.email, user.password);
          expect(localStorage.getItem(user.email)).toEqual(JSON.stringify(user));
        });
  });

  describe('not re-register email', () => {
    it('should not re-register same email',
        () => {
          authService.register(user.name, user.email, user.password)
          expect(authService.register(user2.name, user2.email, user2.password)).toBeFalsy(false);
        });
  });

  describe('login user', () => {
    it('save logged in user to session storage',
        () => {
          authService.register(user.name, user.email, user.password)
          authService.login( user.email, user.password);
          expect(sessionStorage.getItem('currentUser')).toEqual(JSON.stringify(user));
        });
  });
});


