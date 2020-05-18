import { IStyleAPI, IStyleItem } from "import-sort-style";

export default function (styleApi: IStyleAPI): IStyleItem[] {
  const {
    and,
    hasDefaultMember,
    hasNamedMembers,
    hasNamespaceMember,
    hasNoMember,
    hasOnlyDefaultMember,
    hasOnlyNamedMembers,
    hasOnlyNamespaceMember,
    member,
    name,
    naturally,
  } = styleApi;

  return [
    // import "foo"
    { match: and(hasNoMember) },

    // import * as bar from "bar";
    {
      match: and(hasOnlyNamespaceMember),
      sort: member(naturally),
    },

    // import foo, * as bar from "baz";
    {
      match: and(hasDefaultMember, hasNamespaceMember),
      sort: member(naturally),
    },
    // import bar from "bar";
    {
      match: and(hasOnlyDefaultMember),
      sort: member(naturally),
    },
    // import foo, {bar, …} from "baz";
    {
      match: and(hasDefaultMember, hasNamedMembers),
      sort: member(naturally),
      sortNamedMembers: name(naturally),
    },
    // import {_, bar, …} from "baz";
    {
      match: and(hasOnlyNamedMembers),
      sort: member(naturally),
      sortNamedMembers: name(naturally),
    },

    { separator: true },
  ];
}
