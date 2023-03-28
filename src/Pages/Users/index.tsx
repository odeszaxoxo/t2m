import React, { useState, useEffect } from 'react';
import MinusIcon from 'Icons/MinusIcon';
import PlusIcon from 'Icons/PlusIcon';
import SearchIcon from 'Icons/SearchIcon';
import useResize from 'Hooks/useResize';
import { SLUGS, NAMES } from 'Dictionary/roles';
import useAPIError from 'Hooks/useAPIError';
import Api from 'Api';
import { useRecoilValue } from 'recoil';
import userAtom, { IUser } from 'Recoil/Atoms/User';

export default function UsersPage() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const currentUser = useRecoilValue(userAtom);
  const { isPhone } = useResize();
  const { handleAPIError } = useAPIError();

  useEffect(() => {
    async function getUsers() {
      try {
        const results = await Api.post(Api.routes.getUsers(), {});
        setUsers(results.result);
      } catch (error: any) {
        handleAPIError(error);
      }
    }

    getUsers();
  }, []);

  const addRole = async (
    roles: number[] | undefined,
    id: number | undefined
  ) => {
    if (id && roles && roles.includes(3)) {
      try {
        await Api.post(Api.routes.removeRole(), {
          userId: id,
          roleId: 3,
        });
      } catch (error: any) {
        handleAPIError(error);
      }
    } else {
      try {
        await Api.post(Api.routes.addRole(), {
          userId: id,
          roleId: 3,
        });
      } catch (error: any) {
        handleAPIError(error);
      }
    }
  };

  return (
    <section className="users">
      <div className="users__search">
        <input
          placeholder="Поиск"
          className="users__search-input"
          onChange={(event) => setQuery(event.target.value)}
        />
        <SearchIcon />
      </div>
      {users.length > 0 &&
        users
          .filter((user: IUser) => {
            if (query === '') {
              return user;
            }
            if (
              user.name &&
              user.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return user;
            }
            return null;
          })
          .map((user: IUser) =>
            isPhone ? (
              <article key={user.userId} className="user">
                <div className="user__credentials">
                  <p className="user__name">{user.name}</p>
                  <p className="user__email">{user.email || ''}</p>
                </div>
                <button className="user__button" type="button">
                  {user.roles && user.roles.includes(3) ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon />
                  )}
                </button>
                <div className="user__roles">
                  {user.roles &&
                    user.roles.length > 0 &&
                    user.roles.map((role) => (
                      <div
                        key={role}
                        className={`user__role user__role--${SLUGS[role]}`}
                      >
                        {NAMES[role]}
                      </div>
                    ))}
                </div>
              </article>
            ) : (
              <article key={user.userId} className="user">
                <p className="user__name">{user.name}</p>
                <p className="user__email">{user.email}</p>
                <div className="user__roles">
                  {user.roles &&
                    user.roles.length > 0 &&
                    user.roles.map((role) => (
                      <div
                        key={role}
                        className={`user__role user__role--${SLUGS[role]}`}
                      >
                        {NAMES[role]}
                      </div>
                    ))}
                </div>
                <button
                  className="user__button"
                  type="button"
                  onClick={() => addRole(user.roles, user.userId)}
                >
                  {user.roles && user.roles.includes(3) ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon />
                  )}
                </button>
              </article>
            )
          )}
    </section>
  );
}
